'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import type { GameMode, TierValue } from '@/lib/ProfileContext';
import HeaderWrapper from '@/components/HeaderWrapper';
import Image from 'next/image';
import Link from 'next/link';
import NeonAvatarFrame, { NeonFrameStyle } from '@/components/NeonAvatarFrame';

// Game mode display names
const GAME_MODE_LABELS: { [key in GameMode]: string } = {
  'neth-op': 'Nether OP',
  'axe': 'Axe',
  'smp': 'SMP',
  'cpvp': 'Crystal PVP',
  'sword': 'Sword',
  'uhc': 'UHC'
};

// Tier colors and styles
const TIER_STYLES: { [key in TierValue]: { color: string; bgColor: string } } = {
  'LT1': { color: 'text-gray-200', bgColor: 'bg-gray-700' },
  'LT2': { color: 'text-gray-200', bgColor: 'bg-gray-600' },
  'LT3': { color: 'text-gray-200', bgColor: 'bg-gray-500' },
  'LT4': { color: 'text-gray-200', bgColor: 'bg-gray-400' },
  'LT5': { color: 'text-gray-900', bgColor: 'bg-gray-300' },
  'HT1': { color: 'text-green-200', bgColor: 'bg-green-800' },
  'HT2': { color: 'text-blue-200', bgColor: 'bg-blue-800' },
  'HT3': { color: 'text-purple-200', bgColor: 'bg-purple-800' },
  'HT4': { color: 'text-pink-200', bgColor: 'bg-pink-800' },
  'HT5': { color: 'text-yellow-200', bgColor: 'bg-yellow-800' },
};

// Tier descriptions
const TIER_DESCRIPTIONS: { [key in TierValue]: string } = {
  'LT1': 'Beginner - Getting started with basic skills',
  'LT2': 'Novice - Showing progress with fundamentals',
  'LT3': 'Apprentice - Developing consistent skills',
  'LT4': 'Journeyman - Competent in most situations',
  'LT5': 'Adept - Highly capable with good strategy',
  'HT1': 'Expert - Superior skills with advanced techniques',
  'HT2': 'Master - Exceptional player with deep knowledge',
  'HT3': 'Champion - Elite player with strategic mastery',
  'HT4': 'Legend - Renowned for outstanding abilities',
  'HT5': 'Cosmic - The absolute pinnacle of the game',
};

interface UserProfileData {
  displayName?: string;
  username?: string;
  photoURL?: string;
  bio?: string;
  gameTiers?: { [key in GameMode]?: TierValue };
  email?: string;
  avatarDecorations?: string[];
  activeAvatarDecoration?: string;
  cosmicTokens?: number;
  activeProfileBackground?: string;
}

interface TeamData {
  id: string;
  name: string;
  logo?: string;
  points: number;
  members: string[];
}

// Avatar Decoration Component
const AvatarDecoration = ({ decorationType }: { decorationType: string | undefined }) => {
  // For neon frame effects
  if (decorationType?.includes('neon-')) {
    const frameType = decorationType.replace('neon-', '') as NeonFrameStyle;
    return (
      <div className="absolute inset-0 z-10">
        <NeonAvatarFrame type={frameType} size={128} />
      </div>
    );
  }

  switch (decorationType) {
    case 'gold-frame':
      return (
        <img 
          src="/avatar-frames/gold-frame.png" 
          alt="Gold Frame" 
          className="absolute inset-0 w-full h-full pointer-events-none animate-pulse-slow z-10"
        />
      );
    case 'cosmic-frame':
      return (
        <img 
          src="/avatar-frames/cosmic-frame.png" 
          alt="Cosmic Frame" 
          className="absolute inset-0 w-full h-full pointer-events-none animate-spin-slow z-10"
        />
      );
    case 'silver-frame':
      return (
        <img 
          src="/avatar-frames/silver-frame.png" 
          alt="Silver Frame" 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
      );
    case 'diamond-frame':
      return (
        <img 
          src="/avatar-frames/diamond-frame.png" 
          alt="Diamond Frame" 
          className="absolute inset-0 w-full h-full pointer-events-none animate-hue-rotate z-10"
        />
      );
    case 'crown':
      return (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L16 6L24 4L20 16H4L0 4L8 6L12 0Z" fill="#F7B928" />
          </svg>
        </div>
      );
    case 'cosmic-aura':
      return (
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-space-indigo via-space-purple to-space-cyan opacity-40 animate-pulse-slow cosmic-glow z-0"></div>
      );
    case 'stars':
      return (
        <>
          <div className="absolute -top-1 -right-1 text-space-gold animate-twinkle z-10">★</div>
          <div className="absolute top-1 -left-2 text-space-gold animate-twinkle-delay-1 z-10">★</div>
          <div className="absolute -bottom-1 right-0 text-space-gold animate-twinkle-delay-2 z-10">★</div>
        </>
      );
    case 'halo':
      return (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 rounded-full border-2 border-space-gold bg-space-gold/20 z-10"></div>
      );
    default:
      return null;
  }
};

export default function UserProfilePage({ params }: { params: { username: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const { profile } = useProfile();
  
  const [profileData, setProfileData] = useState<any>(null);
  const [userTeams, setUserTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const usernameParam = decodeURIComponent(params.username);
  const isEmailLookup = usernameParam.includes('@');
  const isOwnProfile = user?.email === usernameParam || (!isEmailLookup && profile?.username === usernameParam);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state
        
        let userDoc;
        // Check if we're looking up by email or username
        if (isEmailLookup) {
          // Query by email field since email isn't the document ID in userProfiles
          const userProfilesRef = collection(db, 'userProfiles');
          const emailQuery = query(userProfilesRef, where('email', '==', usernameParam));
          const querySnapshot = await getDocs(emailQuery);
          
          if (!querySnapshot.empty) {
            userDoc = querySnapshot.docs[0];
          }
        } else {
          // Try to find by username (case-insensitive search)
          const userProfilesRef = collection(db, 'userProfiles');
          // First try case-insensitive username search
          const allProfilesSnapshot = await getDocs(userProfilesRef);
          
          // Find the first user with a username that matches case-insensitive
          const matchingUser = allProfilesSnapshot.docs.find(doc => {
            const userData = doc.data();
            return userData.username && 
                  userData.username.toLowerCase() === usernameParam.toLowerCase();
          });
          
          if (matchingUser) {
            userDoc = matchingUser;
          }
        }

        if (userDoc && userDoc.exists()) {
          const userData = userDoc.data();
          setProfileData(userData);
          
          // Fetch teams for this user
          const teamsRef = collection(db, 'teams');
          const userEmail = userData.email;
          const teamsQuery = query(teamsRef, where('members', 'array-contains', userEmail));
          const teamsSnapshot = await getDocs(teamsQuery);
          
          const teamsData: TeamData[] = [];
          teamsSnapshot.forEach(doc => {
            teamsData.push({
              id: doc.id,
              ...doc.data()
            } as TeamData);
          });
          
          setUserTeams(teamsData);
        } else {
          setError(`User profile not found. Please check the username or email and try again.`);
          console.log(`Profile lookup failed for: ${usernameParam}`);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load user profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user, usernameParam, router, isEmailLookup, profile?.username]);

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 py-16 px-6 flex items-center justify-center">
          <div className="cosmic-card p-8">
            <div className="animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full mx-auto"></div>
            <p className="text-center mt-4">Loading profile...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !profileData) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 py-16 px-6 flex items-center justify-center">
          <div className="cosmic-card p-8 max-w-md">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Profile Not Found</h2>
            <p className="mb-6">{error || 'Could not locate this user profile'}</p>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => router.push('/dashboard')} 
                className="btn-primary"
              >
                Return to Dashboard
              </button>
              <button 
                onClick={() => router.back()} 
                className="btn-secondary"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      <div className="flex-1 px-6 py-12 relative overflow-hidden">
        {/* Space background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Display custom background if user has one */}
        {profileData.activeProfileBackground && (
          <div className="absolute inset-0 z-0">
            {/* Themed background elements based on the background type */}
            {(() => {
              const bgType = profileData.activeProfileBackground;
              
              // Add visual elements based on background type
              if (bgType === 'neon-grid' || bgType === 'profile-neon-grid') {
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-70">
                    {/* Neon grid lines */}
                    <div className="absolute inset-0 opacity-70">
                      {/* Horizontal lines */}
                      <div className="absolute left-0 right-0 h-[1px] top-1/4 bg-cyan-400 animate-pulse"></div>
                      <div className="absolute left-0 right-0 h-[1px] top-2/4 bg-purple-400 animate-pulse"></div>
                      <div className="absolute left-0 right-0 h-[1px] top-3/4 bg-cyan-400 animate-pulse"></div>
                      {/* Vertical lines */}
                      <div className="absolute top-0 bottom-0 w-[1px] left-1/4 bg-purple-400 animate-pulse"></div>
                      <div className="absolute top-0 bottom-0 w-[1px] left-2/4 bg-cyan-400 animate-pulse"></div>
                      <div className="absolute top-0 bottom-0 w-[1px] left-3/4 bg-purple-400 animate-pulse"></div>
                      {/* Glowing dots at intersections */}
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-glow top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-purple-300 shadow-glow top-1/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-glow top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      
                      <div className="absolute w-2 h-2 rounded-full bg-purple-300 shadow-glow top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-glow top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-purple-300 shadow-glow top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-glow top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-purple-300 shadow-glow top-3/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-glow top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                );
              } else if (bgType === 'galaxy-swirl' || bgType === 'profile-galaxy-swirl') {
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-70">
                    {/* Galaxy swirl elements */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-indigo-800/30 mix-blend-overlay rounded-full scale-75 animate-spin-slow"></div>
                      <div className="absolute inset-0 bg-purple-700/40 mix-blend-overlay rounded-full scale-50 animate-spin-slow-reverse"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/4 left-1/3 shadow-glow animate-twinkle"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-3/5 left-3/4 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2/3 left-1/4 shadow-glow animate-twinkle-delay-2"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/5 right-1/3 shadow-glow animate-twinkle"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-1/4 right-1/4 shadow-glow animate-twinkle-delay-1"></div>
                    </div>
                  </div>
                );
              } else if (bgType === 'aurora-waves' || bgType === 'profile-aurora-waves') {
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-cyan-900 opacity-70">
                    {/* Aurora waves elements */}
                    <div className="absolute inset-0">
                      <div className="absolute h-24 left-0 right-0 bottom-1/3 bg-gradient-to-r from-cyan-500/40 via-green-400/40 to-teal-300/40 blur-sm animate-aurora"></div>
                      <div className="absolute h-24 left-0 right-0 bottom-2/3 bg-gradient-to-r from-teal-300/40 via-cyan-500/40 to-green-400/40 blur-sm animate-aurora-delay"></div>
                      <div className="absolute h-16 left-0 right-0 bottom-1/2 bg-gradient-to-r from-green-400/40 via-teal-300/40 to-cyan-500/40 blur-sm animate-aurora-reverse"></div>
                    </div>
                  </div>
                );
              } else if (bgType === 'cosmic-stars' || bgType === 'profile-cosmic-stars') {
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-70">
                    {/* Cosmic stars elements */}
                    <div className="absolute inset-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/4 left-1/4 shadow-glow animate-twinkle"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-3/4 left-2/4 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-3/4 shadow-glow animate-twinkle-delay-2"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/3 left-1/2 shadow-glow animate-twinkle"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2/3 left-1/5 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/5 left-3/4 shadow-glow animate-twinkle-delay-2"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-1/6 right-1/6 shadow-glow animate-twinkle"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/6 right-1/3 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-1/3 left-1/3 shadow-glow animate-twinkle-delay-2"></div>
                    </div>
                  </div>
                );
              } else if (bgType === 'galaxy') {
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-70">
                    {/* Galaxy elements */}
                    <div className="absolute inset-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/5 left-1/5 shadow-glow animate-twinkle"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-1/4 right-1/3 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 right-1/4 shadow-glow animate-twinkle-delay-2"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-1/3 left-1/4 shadow-glow animate-twinkle"></div>
                    </div>
                  </div>
                );
              }
              
              // Default background if type not recognized
              return (
                <div className="absolute inset-0 bg-gradient-to-br from-space-dark to-space-dark/80 opacity-70"></div>
              );
            })()}
            
            {/* Try loading the actual image with extensive fallbacks */}
            <div className="absolute inset-0 z-10">
              <img 
                src={`/profile-backgrounds/${profileData.activeProfileBackground}.png`} 
                alt="Profile Background"
                className="w-full h-full object-cover opacity-40"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.onerror = null; // Prevent infinite loop
                  
                  // Store the original background path
                  const bgPath = profileData.activeProfileBackground;
                  let pathsToTry = [];
                  
                  // Try all possible combinations
                  if (bgPath.startsWith('profile-')) {
                    // If it already has profile- prefix
                    pathsToTry = [
                      `/profile-backgrounds/${bgPath}.jpg`,                 // Try .jpg
                      `/profile-backgrounds/${bgPath.substring(8)}.png`,    // Try without prefix, .png
                      `/profile-backgrounds/${bgPath.substring(8)}.jpg`,    // Try without prefix, .jpg
                      `/backgrounds/${bgPath}.png`,                        // Try different directory
                      `/backgrounds/${bgPath}.jpg`,                        // Try different directory, .jpg
                      `/backgrounds/${bgPath.substring(8)}.png`,           // Try different directory, no prefix
                      `/backgrounds/${bgPath.substring(8)}.jpg`,           // Try different directory, no prefix, .jpg
                    ];
                  } else {
                    // If it doesn't have profile- prefix
                    pathsToTry = [
                      `/profile-backgrounds/${bgPath}.jpg`,                 // Try .jpg
                      `/profile-backgrounds/profile-${bgPath}.png`,         // Try with prefix, .png
                      `/profile-backgrounds/profile-${bgPath}.jpg`,         // Try with prefix, .jpg
                      `/backgrounds/${bgPath}.png`,                        // Try different directory
                      `/backgrounds/${bgPath}.jpg`,                        // Try different directory, .jpg
                      `/backgrounds/profile-${bgPath}.png`,                // Try different directory, with prefix
                      `/backgrounds/profile-${bgPath}.jpg`,                // Try different directory, with prefix, .jpg
                    ];
                  }
                  
                  // Try the first alternative
                  if (pathsToTry.length > 0) {
                    imgElement.src = pathsToTry[0];
                    
                    // Setup a cascade of fallbacks
                    let fallbackIndex = 1;
                    imgElement.onerror = function tryNextPath() {
                      if (fallbackIndex < pathsToTry.length) {
                        imgElement.src = pathsToTry[fallbackIndex++];
                        // Keep the error handler for the next potential failure
                      } else {
                        // If all paths failed, make the element invisible but keep the themed fallback visible
                        imgElement.style.display = "none";
                        imgElement.onerror = null;
                      }
                    };
                  }
                }}
              />
            </div>
          </div>
        )}
          <div className="absolute w-96 h-96 rounded-full bg-space-purple/20 blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
          <div className="absolute w-80 h-80 rounded-full bg-space-indigo/20 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
          <div className="absolute w-64 h-64 rounded-full bg-space-cyan/10 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"></div>
          
          {/* Stars */}
          <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-white rounded-full opacity-70 twinkle"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-80 twinkle-delay-1"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 twinkle-delay-2"></div>
        </div>
      
        <div className="container mx-auto max-w-5xl">
          {/* Profile Section */}
          <div className={`cosmic-card border border-space-purple/30 mb-8 p-8 cosmic-shadow-md ${
            profileData.activeProfileBackground ? 'bg-transparent backdrop-blur-sm backdrop-filter' : ''
          }`}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar and Basic Info */}
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 rounded-xl overflow-hidden cosmic-shadow-sm relative">
                  {/* If using neon frame style */}
                  {profileData.activeAvatarDecoration?.includes('neon-') ? (
                    <NeonAvatarFrame 
                      type={profileData.activeAvatarDecoration.replace('neon-', '') as NeonFrameStyle} 
                      size={128}
                    >
                      <Image 
                        src={profileData.photoURL || '/default-avatar.png'} 
                        alt={profileData.displayName || 'User'} 
                        width={128} 
                        height={128} 
                        className="w-full h-full object-cover"
                      />
                    </NeonAvatarFrame>
                  ) : (
                    <div className="w-full h-full rounded-lg relative">
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <Image 
                          src={profileData.photoURL || '/default-avatar.png'} 
                          alt={profileData.displayName || 'User'} 
                          width={128} 
                          height={128} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Apply other decorations as overlay */}
                      {profileData.activeAvatarDecoration && (
                        <AvatarDecoration decorationType={profileData.activeAvatarDecoration} />
                      )}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-space-indigo/40 border border-space-indigo/60 text-sm font-medium">
                    @{profileData.username || 'username'}
                  </div>
                </div>
              </div>
              
              {/* Profile Details */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold font-space mb-3">
                  {profileData.displayName || 'User'}
                </h1>
                
                {profileData.bio && (
                  <p className="text-cosmic-text-secondary mb-6">
                    {profileData.bio}
                  </p>
                )}
                
                {/* Teams Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-space-cyan mb-3">Teams</h2>
                  {userTeams.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {userTeams.map(team => (
                        <div key={team.id} className="flex items-center space-x-3 p-3 bg-space-blue/30 rounded-lg border border-space-purple/20 hover:border-space-purple/40 transition">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-space-dark">
                            <Image 
                              src={team.logo || '/default-team-logo.png'} 
                              alt={team.name} 
                              width={40} 
                              height={40} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link href={`/teams/${team.id}`} className="hover:text-space-cyan transition">
                              {team.name}
                            </Link>
                            <div className="text-xs text-space-gold">{team.points || 0} points</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-cosmic-text-secondary">Not a member of any teams</p>
                  )}
                </div>
                
                {user && isOwnProfile && (
                  <div className="flex justify-end mt-4">
                    <Link 
                      href="/profile" 
                      className="btn-gradient-secondary"
                    >
                      Edit Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className={`cosmic-card border border-space-indigo/30 p-8 cosmic-shadow-md ${
            profileData.activeProfileBackground ? 'bg-transparent backdrop-blur-sm backdrop-filter' : ''
          }`}>
            <h2 className="text-2xl font-bold text-space-cyan mb-6">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(GAME_MODE_LABELS).map(([mode, label]) => {
                const tier = profileData.gameTiers?.[mode as GameMode] || 'LT1';
                const tierStyle = TIER_STYLES[tier as TierValue];
                
                return (
                  <div key={mode} className="border border-space-blue/40 rounded-lg p-4 bg-space-blue/20 cosmic-shadow-sm hover:border-space-blue/60 transition">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{label}</h3>
                      <div className={`px-3 py-1 rounded-full ${tierStyle.bgColor} ${tierStyle.color} text-sm font-medium animate-shimmer`}>
                        {tier}
                      </div>
                    </div>
                    <p className="text-sm text-cosmic-text-secondary">
                      {TIER_DESCRIPTIONS[tier as TierValue]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
