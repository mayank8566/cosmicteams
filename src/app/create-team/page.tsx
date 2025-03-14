'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, doc, getDoc, query, where, getDocs } from '@firebase/firestore';
import HeaderWrapper from '@/components/HeaderWrapper';

export default function CreateTeamPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile } = useProfile();
  
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    // Check if user has permission to create teams
    if (profile && profile.canCreateTeams === false) {
      setError('You do not have permission to create teams. Please contact an administrator.');
      return;
    }

    // Check if user already created a team
    const checkExistingTeams = async () => {
      if (!user?.email) return;
      
      try {
        const teamsRef = collection(db, 'teams');
        const teamsQuery = query(teamsRef, where('createdBy', '==', user.email));
        const teamsSnapshot = await getDocs(teamsQuery);
        
        if (!teamsSnapshot.empty) {
          setError('You have already created a team. Normal users can only create one team.');
        }
      } catch (err) {
        console.error('Error checking existing teams:', err);
      }
    };
    
    checkExistingTeams();
  }, [user, profile, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!teamName.trim()) {
      setError('Team name is required');
      return;
    }

    // Check if user has permission to create teams
    if (profile && profile.canCreateTeams === false) {
      setError('You do not have permission to create teams. Please contact an administrator.');
      return;
    }

    // Check if db is available
    if (!db) {
      setError('Database connection error. Please try again later.');
      return;
    }

    // Check if user already created a team
    if (user?.email) {
      try {
        const teamsRef = collection(db, 'teams');
        const teamsQuery = query(teamsRef, where('createdBy', '==', user.email));
        const teamsSnapshot = await getDocs(teamsQuery);
        
        if (!teamsSnapshot.empty) {
          setError('You have already created a team. Normal users can only create one team.');
          return;
        }
      } catch (err) {
        console.error('Error checking existing teams:', err);
        setError('Error checking team creation privileges. Please try again.');
        return;
      }
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      // Make sure we have a user
      if (!user || !user.email) {
        setError('You must be logged in to create a team');
        setIsSubmitting(false);
        return;
      }
      
      // Parse team members from comma-separated list
      const memberEmails = teamMembers
        .split(',')
        .map(email => email.trim())
        .filter(email => email);
      
      // Add creator to the list if not already included
      if (user.email && !memberEmails.includes(user.email)) {
        memberEmails.unshift(user.email);
      }

      // Create the team document with all required fields
      const teamData = {
        name: teamName.trim(),
        description: description.trim(),
        members: memberEmails,
        createdBy: user.email,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        // Adding check fields to match our Firebase index query
        check: true,
        check2: true,
        // Initialize points to 0 for new teams
        points: 0,
        // Default logo
        logo: '/default-team-logo.png'
      };

      console.log('Creating team with data:', teamData);

      // Add the document to the teams collection
      const docRef = await addDoc(collection(db, 'teams'), teamData);
      console.log('Team created with ID:', docRef.id);

      // Verify the team was created
      const newTeamDoc = await getDoc(doc(db, 'teams', docRef.id));
      if (!newTeamDoc.exists()) {
        throw new Error('Team was not created successfully');
      }

      setSuccess(`Team "${teamName}" created successfully!`);
      
      // Clear form
      setTeamName('');
      setDescription('');
      setTeamMembers('');
      
      // Wait a moment before redirecting to show the success message
      setTimeout(() => {
        // Redirect to the new team page
        router.push(`/teams/${docRef.id}`);
      }, 1500);

    } catch (err) {
      console.error('Error creating team:', err);
      setError('Failed to create team. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 px-6 relative overflow-hidden">
        {/* Animated space background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-72 h-72 rounded-full bg-space-purple/20 blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 rounded-full bg-space-indigo/20 blur-3xl -bottom-32 -right-32 animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70 floating twinkle"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full opacity-50 floating twinkle-delay-1"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 floating twinkle-delay-2"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-80 floating"></div>
        </div>
        
        <div className="max-w-2xl w-full mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8 p-6 cosmic-card border border-space-purple/30 cosmic-shadow-md">
            <h1 className="text-3xl font-bold font-space">
              Create <span className="gradient-text cosmic-gradient bg-gradient-shift">Cosmic Team</span>
            </h1>
            <button
              onClick={() => router.push('/dashboard')}
              className="btn-gradient-secondary btn-press btn-shine"
            >
              <span>Dashboard</span>
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-cosmic-error/20 text-cosmic-error rounded-lg border border-cosmic-error/30 cosmic-shadow-sm animate-fade-in-up">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-cosmic-success/20 text-cosmic-success rounded-lg border border-cosmic-success/30 cosmic-shadow-sm animate-fade-in-up">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 cosmic-card border border-space-purple/30 p-8 cosmic-shadow-md">
            <div>
              <label className="block text-sm font-medium mb-2 text-cosmic-text-secondary">Team Name</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="cosmic-input focus:cosmic-glow-input w-full"
                placeholder="Enter team name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-cosmic-text-secondary">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="cosmic-input focus:cosmic-glow-input w-full"
                rows={4}
                placeholder="Describe your team's purpose and goals"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-cosmic-text-secondary">Team Members (comma-separated emails)</label>
              <textarea
                value={teamMembers}
                onChange={(e) => setTeamMembers(e.target.value)}
                className="cosmic-input focus:cosmic-glow-input w-full"
                rows={2}
                placeholder="member1@example.com, member2@example.com"
              />
              <p className="mt-1 text-sm text-cosmic-text-tertiary">Your email will automatically be added as team creator</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || (profile && profile.canCreateTeams === false) || !db}
              className="btn-gradient w-full py-3 btn-pulse btn-press btn-shine btn-ripple disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Team...
                </span>
              ) : 'Create Team'}
            </button>
          </form>
          
          {/* Team creation tips */}
          <div className="mt-8 cosmic-card border border-space-cyan/30 p-6 cosmic-shadow-sm">
            <h3 className="text-lg font-bold mb-3 text-space-cyan">Team Creation Tips</h3>
            <ul className="space-y-2 text-cosmic-text-secondary">
              <li className="flex items-start">
                <span className="text-space-cyan mr-2">•</span>
                Give your team a unique, memorable name that reflects your mission
              </li>
              <li className="flex items-start">
                <span className="text-space-cyan mr-2">•</span>
                Add a detailed description to help members understand the team's purpose
              </li>
              <li className="flex items-start">
                <span className="text-space-cyan mr-2">•</span>
                Invite team members you collaborate with frequently
              </li>
              <li className="flex items-start">
                <span className="text-space-cyan mr-2">•</span>
                Everyone starts with 0 points - complete missions to climb the leaderboard!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
