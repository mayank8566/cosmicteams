'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
// @ts-ignore - Ignore TypeScript errors for Firebase imports
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db, storage } from '@/lib/firebase';
// @ts-ignore - Ignore TypeScript errors for Firebase Storage imports
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import HeaderWrapper from '@/components/HeaderWrapper';
import Image from 'next/image';

interface TeamData {
  name: string;
  description: string;
  members: string[];
  createdBy: string;
  createdAt: any;
  points: number;
  logo?: string;
}

export default function TeamDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const [team, setTeam] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteSuccess, setInviteSuccess] = useState<string | null>(null);
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [isInviting, setIsInviting] = useState(false);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [showTeamSettings, setShowTeamSettings] = useState(false);
  const [inviteSubmitting, setInviteSubmitting] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [newPoints, setNewPoints] = useState<number>(0);
  const [isUpdatingSettings, setIsUpdatingSettings] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState<string | null>(null);
  const [settingsError, setSettingsError] = useState<string | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const teamId = params?.id; // Store the ID in a variable to avoid direct access in useEffect

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    // Make sure we have a team ID
    if (!teamId) {
      setError('Invalid team ID');
      setLoading(false);
      return;
    }

    const fetchTeam = async () => {
      try {
        const teamDoc = await getDoc(doc(db, 'teams', teamId));
        
        if (!teamDoc.exists()) {
          setError('Team not found');
          setLoading(false);
          return;
        }

        const teamData = teamDoc.data() as TeamData;
        
        // Check if current user is a member of this team
        const isMember = teamData.members.includes(user.email || '');
        
        // Allow viewing but set a flag for non-members
        setTeam(teamData);
        
        // Set viewer mode if not a member
        if (!isMember) {
          setShowInviteForm(false);
          setShowTeamSettings(false);
        }
        setNewPoints(teamData.points || 0);
      } catch (err) {
        console.error('Error fetching team:', err);
        setError('Failed to load team details');
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [user, teamId, router]); // Use teamId instead of params.id

  const handleInviteMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isInviting || !team || !user || !teamId) return; // Add teamId check

    // Validate email
    if (!inviteEmail.trim()) {
      setInviteError('Email is required');
      return;
    }

    if (!inviteEmail.includes('@')) {
      setInviteError('Please enter a valid email address');
      return;
    }

    try {
      setIsInviting(true);
      setInviteError(null);
      
      // Make sure the user isn't already in the team
      if (team.members.includes(inviteEmail.trim())) {
        setInviteError('User is already a team member');
        setIsInviting(false);
        return;
      }
      
      // Update the team document to add the new member
      const teamRef = doc(db, 'teams', teamId); // Use teamId instead of params.id
      await updateDoc(teamRef, {
        members: arrayUnion(inviteEmail.trim()),
        updatedAt: new Date()
      });
      
      // Update local state
      setTeam({
        ...team,
        members: [...team.members, inviteEmail.trim()]
      });
      
      setInviteSuccess(`${inviteEmail} has been added to the team!`);
      setInviteEmail('');
      setTimeout(() => setInviteSuccess(null), 3000);
    } catch (err) {
      console.error('Error inviting member:', err);
      setInviteError('Failed to invite member. Please try again.');
    } finally {
      setIsInviting(false);
    }
  };

  const handleTeamSettingsUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isUpdatingSettings || !team || !user || !teamId) return;

    setSettingsError(null);
    setSettingsSuccess(null);
    setIsUpdatingSettings(true);

    try {
      // Reference to team document
      const teamRef = doc(db, 'teams', teamId);
      let updateData: any = {};

      // Upload new logo if selected
      if (logoFile) {
        const storageRef = ref(storage, `team-logos/${teamId}`);
        await uploadBytes(storageRef, logoFile);
        const logoUrl = await getDownloadURL(storageRef);
        updateData.logo = logoUrl;
      }

      // Update points if different from current
      if (newPoints !== team.points) {
        updateData.points = newPoints;
      }

      // Only update if there are changes
      if (Object.keys(updateData).length > 0) {
        updateData.updatedAt = new Date();
        await updateDoc(teamRef, updateData);

        // Update local state
        setTeam({
          ...team,
          ...updateData
        });

        setSettingsSuccess('Team settings updated successfully!');
        setShowTeamSettings(false);
        setTimeout(() => setSettingsSuccess(null), 3000);
      } else {
        setSettingsError('No changes detected');
      }
    } catch (err) {
      console.error('Error updating team settings:', err);
      setSettingsError('Failed to update team settings. Please try again.');
    } finally {
      setIsUpdatingSettings(false);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  // Check if user is a member and/or the team leader
  const isMember = team?.members.includes(user?.email || '');
  const isTeamLeader = team?.createdBy === user?.email;

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="flex-1 px-6 py-12 relative overflow-hidden">
        {/* Space background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-space-purple/20 blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
          <div className="absolute w-80 h-80 rounded-full bg-space-indigo/20 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
          <div className="absolute w-64 h-64 rounded-full bg-space-cyan/10 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"></div>
          
          {/* Stars */}
          <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-white rounded-full opacity-70 twinkle"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-80 twinkle-delay-1"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 twinkle-delay-2"></div>
        </div>
      
        {loading ? (
          <div className="container mx-auto flex items-center justify-center py-20">
            <div className="cosmic-card border border-space-purple/30 p-8 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-space-cyan border-t-transparent"></div>
              <p className="mt-4 text-lg">Loading team details...</p>
            </div>
          </div>
        ) : error ? (
          <div className="container mx-auto flex items-center justify-center py-20">
            <div className="cosmic-card border border-cosmic-error/30 p-8 max-w-lg">
              <h2 className="text-2xl font-bold text-cosmic-error mb-4">Error</h2>
              <p className="mb-6">{error}</p>
              <button
                onClick={() => router.push('/dashboard')}
                className="btn-gradient inline-block btn-press"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        ) : team ? (
            <div className="container mx-auto max-w-5xl">
              {/* Non-member notice */}
              {team && !team.members.includes(user?.email || '') && (
                <div className="cosmic-card border border-space-gold/30 mb-8 p-4 bg-space-gold/10 cosmic-shadow-md">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-space-gold font-medium">
                      You are viewing this team in read-only mode. Join the team to participate in team activities.
                    </p>
                  </div>
                </div>
              )}
            {/* Team header section */}
            <div className="cosmic-card border border-space-purple/30 mb-8 p-8 cosmic-shadow-md relative overflow-hidden">
              {/* Team points highlight */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-space-indigo to-space-purple px-4 py-2 rounded-full cosmic-shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider opacity-80">Team Points</span>
                  <span className="text-xl font-bold">{team.points || 0}</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-space-indigo to-space-purple flex items-center justify-center text-lg font-bold cosmic-shadow-sm">
                  <div className="w-full h-full bg-space-dark rounded-lg overflow-hidden">
                    <Image 
                      src={team.logo || '/default-team-logo.png'}
                      alt={team.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold font-space mb-2">
                    {team.name}
                  </h1>
                  <p className="text-cosmic-text-secondary text-lg mb-4">{team.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {isMember && isTeamLeader && (
                      <div className="inline-block">
                        <button 
                          onClick={() => setShowInviteForm(!showInviteForm)}
                          className="btn-gradient-secondary btn-press btn-shine"
                        >
                          <span>{showInviteForm ? 'Cancel' : 'Invite Member'}</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => router.push('/dashboard')}
                      className="btn-gradient-secondary btn-press"
                    >
                      <span>Dashboard</span>
                    </button>
                    {isMember && isTeamLeader && (
                      <div className="inline-block">
                        <button 
                          onClick={() => setShowTeamSettings(!showTeamSettings)}
                          className="btn-gradient-secondary btn-press btn-shine"
                        >
                          <span>{showTeamSettings ? 'Cancel' : 'Team Settings'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Invite member form */}
            {showInviteForm && (
              <div className="cosmic-card border border-space-cyan/30 mb-8 p-6 cosmic-shadow-md animate-fade-in-up">
                <h2 className="text-xl font-bold mb-4 text-space-cyan">Invite New Member</h2>
                
                <form onSubmit={handleInviteMember} className="space-y-4">
                  <div>
                    <label htmlFor="inviteEmail" className="block text-sm font-medium mb-2 text-cosmic-text-secondary">
                      Email Address
                    </label>
                    <input
                      id="inviteEmail"
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="cosmic-input focus:cosmic-glow-input w-full"
                      placeholder="member@example.com"
                      required
                    />
                  </div>
                  
                  {inviteError && (
                    <div className="p-3 bg-cosmic-error/20 border border-cosmic-error/30 rounded-lg text-cosmic-error animate-fade-in-up">
                      {inviteError}
                    </div>
                  )}
                  
                  {inviteSuccess && (
                    <div className="p-3 bg-cosmic-success/20 border border-cosmic-success/30 rounded-lg text-cosmic-success animate-fade-in-up">
                      {inviteSuccess}
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <button 
                      type="submit" 
                      disabled={isInviting}
                      className="btn-gradient btn-press btn-ripple disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isInviting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Invite
                        </span>
                      ) : 'Send Invite'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Team settings form */}
            {showTeamSettings && (
              <div className="cosmic-card border border-space-cyan/30 mb-8 p-6 cosmic-shadow-md animate-fade-in-up">
                <h2 className="text-xl font-bold mb-4 text-space-cyan">Team Settings</h2>
                
                <form onSubmit={handleTeamSettingsUpdate} className="space-y-4">
                  <div>
                    <label htmlFor="newPoints" className="block text-sm font-medium mb-2 text-cosmic-text-secondary">
                      Team Points
                    </label>
                    <input
                      id="newPoints"
                      type="number"
                      value={newPoints}
                      onChange={(e) => setNewPoints(parseInt(e.target.value))}
                      className="cosmic-input focus:cosmic-glow-input w-full"
                      required
                    />
                    <p className="mt-1 text-xs text-red-400 font-semibold">
                      Please set points correctly; if not, you will be banned.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="logoFile" className="block text-sm font-medium mb-2 text-cosmic-text-secondary">
                      Team Logo
                    </label>
                    <input
                      id="logoFile"
                      type="file"
                      onChange={handleLogoChange}
                      className="cosmic-input focus:cosmic-glow-input w-full"
                    />
                  </div>
                  
                  {settingsError && (
                    <div className="p-3 bg-cosmic-error/20 border border-cosmic-error/30 rounded-lg text-cosmic-error animate-fade-in-up">
                      {settingsError}
                    </div>
                  )}
                  
                  {settingsSuccess && (
                    <div className="p-3 bg-cosmic-success/20 border border-cosmic-success/30 rounded-lg text-cosmic-success animate-fade-in-up">
                      {settingsSuccess}
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <button 
                      type="submit" 
                      disabled={isUpdatingSettings}
                      className="btn-gradient btn-press btn-ripple disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isUpdatingSettings ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Updating Settings
                        </span>
                      ) : 'Update Settings'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Team details and members section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team stats */}
              <div className="cosmic-card border border-space-indigo/30 p-6 cosmic-shadow-sm">
                <h2 className="text-xl font-bold mb-4 text-space-indigo">Team Stats</h2>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-cosmic-text-tertiary mb-1">Created</div>
                    <div>{team.createdAt ? new Date(team.createdAt.toDate()).toLocaleDateString() : 'Unknown'}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-cosmic-text-tertiary mb-1">Team Leader</div>
                    <div className="flex items-center">
                      <span>{team.createdBy}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-cosmic-text-tertiary mb-1">Member Count</div>
                    <div>{team.members?.length || 0} members</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-cosmic-text-tertiary mb-1">Team Points</div>
                    <div className="text-2xl font-bold text-space-gold cosmic-glow-cyan">{team.points || 0}</div>
                  </div>
                </div>
              </div>
              
              {/* Team members */}
              <div className="cosmic-card border border-space-purple/30 p-6 cosmic-shadow-sm md:col-span-2">
                <h2 className="text-xl font-bold mb-4 text-space-purple">Team Members</h2>
                
                {team.members && team.members.length > 0 ? (
                  <div className="space-y-4">
                    {team.members.map((member, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 bg-space-blue/40 rounded-lg border border-space-purple/20 hover:border-space-purple/40 transition-colors group cursor-pointer" 
                        onClick={() => router.push(`/profile/${encodeURIComponent(member)}`)}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-indigo to-space-purple flex items-center justify-center text-lg font-bold cosmic-shadow-sm">
                            {member.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="group-hover:text-space-cyan transition-colors">{member}</div>
                            {team.createdBy === member && (
                              <div className="text-xs text-cosmic-text-tertiary mt-0.5">
                                <span className="bg-space-purple/20 text-space-purple px-2 py-0.5 rounded-full inline-block">Team Leader</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-space-cyan text-sm">View Profile</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center border border-dashed border-space-purple/30 rounded-lg">
                    <p className="text-cosmic-text-secondary">No members in this team</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
