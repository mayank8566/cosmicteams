'use client';

import { useState, useEffect, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import { doc, getDoc, updateDoc, arrayUnion, collection, query, where, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '@/lib/firebase';
import HeaderWrapper from '@/components/HeaderWrapper';
import Image from 'next/image';

interface TeamData {
  id: string;
  name: string;
  description: string;
  members: string[];
  memberUsernames: string[];
  createdBy: string;
  creatorUsername: string;
  points: number;
  logo: string;
  banner?: string;
  bannerEffect?: string;
  createdAt: any;
}

export default function TeamSettingsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const { profile } = useProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [team, setTeam] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [inviteUsername, setInviteUsername] = useState('');
  const [isInviting, setIsInviting] = useState(false);
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [inviteSuccess, setInviteSuccess] = useState<string | null>(null);

  // Banner states
  const [activeBanner, setActiveBanner] = useState<string>('default');
  const [applyingBanner, setApplyingBanner] = useState(false);
  const [bannerError, setBannerError] = useState<string | null>(null);
  const [bannerSuccess, setBannerSuccess] = useState<string | null>(null);
  
  // Disband team states
  const [showDisbandConfirm, setShowDisbandConfirm] = useState(false);
  const [disbandConfirmValue, setDisbandConfirmValue] = useState('');
  const [disbanding, setDisbanding] = useState(false);

  // Banner preview definitions
  const bannerPreviews: Record<string, string> = {
    'default': 'Default',
    'gradient': 'Gradient',
    'animated': 'Animated',
    'cosmic': 'Cosmic',
    'sparkle': 'Sparkle',
    'neon-pulse': 'Neon Pulse',
    'cyber-grid': 'Cyber Grid',
    'flame-wave': 'Flame Wave',
  };

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const fetchTeam = async () => {
      try {
        setLoading(true);
        const teamDoc = await getDoc(doc(db, 'teams', params.id));
        
        if (!teamDoc.exists()) {
          setError('Team not found');
          setLoading(false);
          return;
        }

        const teamData = teamDoc.data() as Omit<TeamData, 'id'>;
        const fullTeam = {
          id: teamDoc.id,
          ...teamData,
          points: teamData.points || 0,
          memberUsernames: teamData.memberUsernames || [],
        };
        
        // Check if current user is the team leader
        if (teamData.createdBy !== user.email) {
          setError('Only team leaders can access settings');
          setLoading(false);
          return;
        }

        setTeam(fullTeam);
        setTeamName(fullTeam.name);
        setDescription(fullTeam.description);
        setLogoPreview(fullTeam.logo);
        
        // Set active banner if it exists
        if (fullTeam.banner) {
          setActiveBanner(fullTeam.banner);
        }
      } catch (err) {
        console.error('Error fetching team:', err);
        setError('Failed to load team details');
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [user, params.id, router]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file is an image and size is reasonable
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError('Image size should be less than 2MB');
      return;
    }

    setLogoFile(file);
    setError(null);

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setLogoPreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !team) return;

    // Validate required fields
    if (!teamName.trim()) {
      setError('Team name is required');
      return;
    }

    if (!description.trim()) {
      setError('Team description is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      let logoUrl = team.logo;
      
      // If a new logo was uploaded, process it
      if (logoFile) {
        const storage = getStorage();
        const logoFileName = `team-logos/${team.id}-${Date.now()}`; 
        const logoRef = ref(storage, logoFileName);
        
        await uploadBytes(logoRef, logoFile);
        logoUrl = await getDownloadURL(logoRef);
      }
      
      // Update the team document
      const teamRef = doc(db, 'teams', team.id);
      await updateDoc(teamRef, {
        name: teamName.trim(),
        description: description.trim(),
        logo: logoUrl,
        updatedAt: new Date()
      });

      // Update local state with the new data
      setTeam({
        ...team,
        name: teamName.trim(),
        description: description.trim(),
        logo: logoUrl
      });

      setSuccess('Team settings updated successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error('Error updating team:', err);
      setError('Failed to update team settings. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInviteMember = async (e: FormEvent) => {
    e.preventDefault();
    if (isInviting || !team) return;

    // Validate username
    if (!inviteUsername.trim()) {
      setInviteError('Username is required');
      return;
    }

    try {
      setIsInviting(true);
      setInviteError(null);
      
      // Check if the username exists
      const usersQuery = query(
        collection(db, 'userProfiles'),
        where('username', '==', inviteUsername.trim())
      );
      
      const userSnapshot = await getDocs(usersQuery);
      
      if (userSnapshot.empty) {
        setInviteError('Username not found');
        setIsInviting(false);
        return;
      }
      
      const userData = userSnapshot.docs[0].data();
      const userEmail = userData.email;
      
      // Make sure the user isn't already in the team
      if (team.members.includes(userEmail)) {
        setInviteError('User is already a team member');
        setIsInviting(false);
        return;
      }
      
      // Make sure the username isn't already in the team
      if (team.memberUsernames.includes(inviteUsername.trim())) {
        setInviteError('User is already a team member');
        setIsInviting(false);
        return;
      }
      
      // Update the team document to add the new member
      const teamRef = doc(db, 'teams', team.id);
      await updateDoc(teamRef, {
        members: arrayUnion(userEmail),
        memberUsernames: arrayUnion(inviteUsername.trim()),
        updatedAt: new Date()
      });
      
      // Update local state
      setTeam({
        ...team,
        members: [...team.members, userEmail],
        memberUsernames: [...team.memberUsernames, inviteUsername.trim()]
      });
      
      setInviteSuccess(`${inviteUsername} has been added to the team!`);
      setInviteUsername('');
      setTimeout(() => setInviteSuccess(null), 3000);
    } catch (err) {
      console.error('Error inviting member:', err);
      setInviteError('Failed to invite member. Please try again.');
    } finally {
      setIsInviting(false);
    }
  };

  // Handle team disbanding
  const handleDisbandTeam = async () => {
    if (disbanding || !team) return;
    
    // Validate the confirmation text
    if (disbandConfirmValue.trim().toLowerCase() !== 'disband') {
      setError('Please type "disband" to confirm');
      return;
    }
    
    try {
      setDisbanding(true);
      setError(null);
      
      // Delete the team document
      const teamRef = doc(db, 'teams', team.id);
      await updateDoc(teamRef, {
        isDisabled: true,
        disbandedAt: new Date()
      });
      
      setSuccess('Team has been disbanded. Redirecting...');
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
      
    } catch (err) {
      console.error('Error disbanding team:', err);
      setError('Failed to disband team. Please try again.');
    } finally {
      setDisbanding(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="container mx-auto px-4 py-20 flex justify-center items-center flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="w-12 h-12 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="container mx-auto px-4 py-20 flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-2xl mx-auto p-8 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl">
            <h1 className="text-3xl font-bold text-red-400 mb-4">Error</h1>
            <p className="text-white/80">{error}</p>
            <button
              onClick={() => router.push(`/teams/${params.id}`)}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Return to Team
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!team) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="container mx-auto px-4 py-8 flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8 p-6 bg-slate-800/80 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Team Settings
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push(`/teams/${params.id}`)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Back to Team
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Team Settings Form */}
              <form onSubmit={handleSubmit} className="p-6 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl mb-6">
                <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                  Edit Team Information
                </h2>

                {error && (
                  <div className="mb-6 p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="mb-6 p-4 bg-green-900/50 text-green-200 rounded-lg border border-green-700">
                    {success}
                  </div>
                )}

                {/* Team Logo Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Team Logo</label>
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed border-gray-400 hover:border-blue-500 cursor-pointer bg-gray-800/50 overflow-hidden"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {logoPreview ? (
                        <Image 
                          src={logoPreview} 
                          alt="Team logo preview" 
                          width={96} 
                          height={96} 
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="text-center">
                          <span className="text-2xl">+</span>
                          <span className="block text-xs mt-1">Upload</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleLogoChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                      >
                        Change Logo
                      </button>
                      <p className="text-xs text-gray-400 mt-2">JPG, PNG or GIF, max 2MB</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                    placeholder="Enter team name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                    rows={4}
                    placeholder="Describe your team's purpose and goals"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>
            
            <div>
              {/* Invite Members Form */}
              <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl mb-6">
                <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                  Invite Team Members
                </h2>
                
                {inviteError && (
                  <div className="mb-6 p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700">
                    {inviteError}
                  </div>
                )}

                {inviteSuccess && (
                  <div className="mb-6 p-4 bg-green-900/50 text-green-200 rounded-lg border border-green-700">
                    {inviteSuccess}
                  </div>
                )}
                
                <form onSubmit={handleInviteMember} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input
                      type="text"
                      value={inviteUsername}
                      onChange={(e) => setInviteUsername(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                      placeholder="Enter username"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Enter the username of the person you want to invite
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isInviting}
                    className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    {isInviting ? 'Inviting...' : 'Invite Member'}
                  </button>
                </form>
              </div>
              
              {/* Team Appearance */}
              <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl">
                <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                  Team Banner
                </h2>
                
                {bannerError && (
                  <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-4 animate-shake">
                    {bannerError}
                  </div>
                )}
                
                {bannerSuccess && (
                  <div className="bg-green-500/20 border border-green-500/50 text-white p-3 rounded-lg mb-4 animate-fade-in-up">
                    {bannerSuccess}
                  </div>
                )}
                
                <div className="mb-4">
                  <p className="text-sm text-white/70 mb-2">
                    Select a banner style for your team. You can acquire more banners from the marketplace.
                  </p>
                  
                  {/* Banner grid */}
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    {/* Default banner */}
                    <div 
                      className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                        activeBanner === 'default' || !activeBanner ? 'border-blue-500' : 'border-transparent hover:border-white/30'
                      }`}
                      onClick={() => setActiveBanner('default')}
                    >
                      <div className="h-10 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Default Banner</div>
                      </div>
                    </div>
                    
                    {/* Purchased banners from profile */}
                    {profile?.teamBanners?.map((bannerId: string) => {
                      const effect = bannerId.replace('banner-', '');
                      const name = bannerPreviews[effect] || effect;
                      
                      return (
                        <div 
                          key={bannerId}
                          className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                            activeBanner === bannerId ? 'border-blue-500' : 'border-transparent hover:border-white/30'
                          }`}
                          onClick={() => setActiveBanner(bannerId)}
                        >
                          <div className={`
                            h-10 relative overflow-hidden
                            ${effect === 'gradient' ? 'bg-gradient-to-r from-space-purple via-space-indigo to-space-cyan' : ''}
                            ${effect === 'animated' ? 'bg-gradient-to-r from-space-purple via-space-indigo to-space-cyan bg-size-200 animate-gradient-x' : ''}
                            ${effect === 'cosmic' ? 'bg-space-dark cosmic-stars' : ''}
                            ${effect === 'sparkle' ? 'bg-space-dark' : ''}
                            ${effect === 'neon-pulse' ? 'bg-black border border-neon-blue animate-neon-breathe text-neon-blue' : ''}
                            ${effect === 'cyber-grid' ? 'bg-black relative' : ''}
                            ${effect === 'flame-wave' ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-size-200 animate-gradient-x' : ''}
                          `}>
                            <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">
                              {name} Banner
                            </div>
                            
                            {effect === 'cyber-grid' && (
                              <div className="absolute inset-0 grid grid-cols-8 grid-rows-2">
                                {Array.from({ length: 16 }).map((_, i) => (
                                  <div key={i} className="border-[0.5px] border-neon-blue/20 animate-neon-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                                ))}
                              </div>
                            )}
                            
                            {effect === 'sparkle' && (
                              <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                                <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                                <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Link to marketplace if no banners or to get more */}
                    <div 
                      className="relative overflow-hidden rounded-lg cursor-pointer border-2 border-dashed border-white/30 hover:border-white/50 transition-all"
                      onClick={() => router.push('/marketplace?category=banner')}
                    >
                      <div className="h-10 flex items-center justify-center text-white text-xs">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          Get More Banners
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={async () => {
                      try {
                        setApplyingBanner(true);
                        setBannerError('');
                        setBannerSuccess('');
                        
                        if (!team) return;
                        
                        const teamRef = doc(db, 'teams', team.id);
                        await updateDoc(teamRef, {
                          banner: activeBanner,
                          bannerEffect: activeBanner.replace('banner-', '')
                        });
                        
                        // Update local state
                        setTeam({
                          ...team,
                          banner: activeBanner,
                          bannerEffect: activeBanner.replace('banner-', '')
                        });
                        
                        setBannerSuccess('Team banner updated successfully!');
                        
                        // Clear success message after 3 seconds
                        setTimeout(() => {
                          setBannerSuccess('');
                        }, 3000);
                      } catch (error) {
                        console.error('Error updating team banner:', error);
                        setBannerError('Failed to update team banner. Please try again.');
                      } finally {
                        setApplyingBanner(false);
                      }
                    }}
                    disabled={applyingBanner}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    {applyingBanner ? (
                      <>
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2"></span>
                        <span>Applying...</span>
                      </>
                    ) : (
                      <span>Apply Banner</span>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Team Members List */}
              <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl">
                <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                  Team Members
                </h2>
                
                <div className="space-y-3">
                  {team.memberUsernames.map((username, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg ${
                        username === team.creatorUsername 
                          ? 'bg-blue-900/30 border border-blue-700/50' 
                          : 'bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                            {username.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-white">
                            {username}
                          </span>
                        </div>
                        
                        {username === team.creatorUsername ? (
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Leader
                          </span>
                        ) : (
                          <button
                            onClick={() => {
                              alert('Remove member feature coming soon!');
                            }}
                            className="text-xs text-red-400 hover:text-red-300"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone - Disband Team */}
          <div className="p-6 bg-red-900/20 rounded-lg backdrop-blur-sm shadow-xl mb-6 border border-red-800/50">
            <h2 className="text-xl font-semibold mb-4 text-red-400">
              Danger Zone
            </h2>
            
            <p className="text-white/80 mb-4">
              Disbanding a team is a permanent action that cannot be undone. All team data will be marked as inactive.
            </p>
            
            {!showDisbandConfirm ? (
              <button
                type="button"
                onClick={() => setShowDisbandConfirm(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Disband Team
              </button>
            ) : (
              <div className="p-4 bg-red-950/50 rounded-lg border border-red-800">
                <p className="text-red-200 font-medium mb-4">
                  ⚠️ Warning: This action cannot be undone
                </p>
                <p className="text-white/80 mb-4">
                  To confirm, please type <span className="font-bold">disband</span> in the field below:
                </p>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={disbandConfirmValue}
                    onChange={(e) => setDisbandConfirmValue(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border border-red-800 bg-black/40 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Type 'disband' to confirm"
                  />
                  <button
                    type="button"
                    onClick={handleDisbandTeam}
                    disabled={disbanding || disbandConfirmValue.trim().toLowerCase() !== 'disband'}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  >
                    {disbanding ? 'Processing...' : 'Confirm Disband'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDisbandConfirm(false);
                      setDisbandConfirmValue('');
                    }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}
