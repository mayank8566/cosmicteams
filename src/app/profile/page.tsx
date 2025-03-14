'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import type { GameMode, TierValue } from '@/lib/ProfileContext';
import ClientImage from '@/components/ClientImage';
import NeonAvatarFrame, { NeonFrameStyle } from '@/components/NeonAvatarFrame';

// Game mode options and their display names
const GAME_MODES: { value: GameMode; label: string }[] = [
  { value: 'neth-op', label: 'Nether OP' },
  { value: 'axe', label: 'Axe' },
  { value: 'smp', label: 'SMP' },
  { value: 'cpvp', label: 'Crystal PVP' },
  { value: 'sword', label: 'Sword' },
  { value: 'uhc', label: 'UHC' }
];

// Tier options
const TIER_OPTIONS: { value: TierValue; label: string }[] = [
  { value: 'LT1', label: 'Low Tier 1' },
  { value: 'LT2', label: 'Low Tier 2' },
  { value: 'LT3', label: 'Low Tier 3' },
  { value: 'LT4', label: 'Low Tier 4' },
  { value: 'LT5', label: 'Low Tier 5' },
  { value: 'HT1', label: 'High Tier 1' },
  { value: 'HT2', label: 'High Tier 2' },
  { value: 'HT3', label: 'High Tier 3' },
  { value: 'HT4', label: 'High Tier 4' },
  { value: 'HT5', label: 'High Tier 5' }
];

export default function ProfilePage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile, updating, error, updateProfileData, uploadProfileImage } = useProfile();
  
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [gameTiers, setGameTiers] = useState<{ [key in GameMode]?: TierValue }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Add state for previewing selections
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
  const [previewBackground, setPreviewBackground] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (profile) {
      setDisplayName(profile.displayName || '');
      setBio(profile.bio || '');
      setGameTiers(profile.gameTiers || {});
    }
  }, [user, profile, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Avatar decoration preview component
  const AvatarDecoration = ({ decorationType }: { decorationType: string | null | undefined }) => {
    // For neon frame effects
    if (decorationType?.includes('neon-')) {
      const frameType = decorationType.replace('neon-', '') as NeonFrameStyle;
      return (
        <div className="absolute inset-0 z-10">
          <NeonAvatarFrame type={frameType} size={64} />
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
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-full border-2 border-space-gold bg-space-gold/20 z-10"></div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      // Upload image if selected
      let photoURL = profile?.photoURL;
      if (selectedImage) {
        try {
          photoURL = await uploadProfileImage(selectedImage);
        } catch (err) {
          alert(err instanceof Error ? err.message : 'Failed to upload image');
          return;
        }
      }

      // Update profile data
      await updateProfileData({
        displayName,
        bio,
        photoURL,
        gameTiers
      });

      alert('Profile updated successfully!');
      setSelectedImage(null);
    } catch (err) {
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-space-dark to-space-dark/80 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-space-cyan to-space-indigo gradient-text">Profile Settings</h1>
        <button
          onClick={() => router.push('/')}
          className="btn-gradient"
        >
          Home
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto cosmic-card backdrop-blur-md">
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-space-blue/30 border border-space-purple/30 backdrop-blur-sm">
            <h3 className="text-xl font-medium mb-4">Live Preview</h3>
            <div className="flex flex-col items-center">
              <div className="w-full h-48 relative overflow-hidden rounded-lg mb-6">
                {/* Background preview */}
                {(previewBackground || profile?.activeProfileBackground) && (
                  <img 
                    src={`/profile-backgrounds/${previewBackground || profile?.activeProfileBackground}.png`} 
                    alt="Profile Background"
                    className="w-full h-full object-cover opacity-70"
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.onerror = null; // Prevent infinite loop
                      
                      // Store the original background path
                      const bgPath = previewBackground || profile?.activeProfileBackground || '';
                      let pathsToTry = [];
                      
                      // Build an array of all possible combinations to try in order
                      if (bgPath.startsWith('profile-')) {
                        // If it already has profile- prefix, try these combinations
                        pathsToTry = [
                          `/profile-backgrounds/${bgPath}.jpg`,                 // Try original name with .jpg
                          `/profile-backgrounds/${bgPath.substring(8)}.png`,   // Try without prefix, .png
                          `/profile-backgrounds/${bgPath.substring(8)}.jpg`,   // Try without prefix, .jpg
                        ];
                      } else {
                        // If it doesn't have profile- prefix, try these combinations
                        pathsToTry = [
                          `/profile-backgrounds/${bgPath}.jpg`,                 // Try original name with .jpg
                          `/profile-backgrounds/profile-${bgPath}.png`,         // Try with prefix, .png
                          `/profile-backgrounds/profile-${bgPath}.jpg`,         // Try with prefix, .jpg
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
                            // If all paths failed, remove error handler and show nothing
                            imgElement.onerror = null;
                          }
                        };
                      }
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-space-dark/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative inline-block">
                      {/* Profile image with decoration */}
                      <div className="w-24 h-24 rounded-full relative">
                        {/* For neon frames, use the NeonAvatarFrame component directly */}
                        {(previewAvatar || profile?.activeAvatarDecoration)?.includes('neon-') ? (
                          <NeonAvatarFrame 
                            type={(previewAvatar || profile?.activeAvatarDecoration || '').replace('neon-', '') as NeonFrameStyle} 
                            size={96}
                          >
                            <img 
                              src={imagePreview || profile?.photoURL || '/default-avatar.png'} 
                              alt="Profile Preview" 
                              className="w-full h-full object-cover"
                            />
                          </NeonAvatarFrame>
                        ) : (
                          <>
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img 
                                src={imagePreview || profile?.photoURL || '/default-avatar.png'} 
                                alt="Profile Preview" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Avatar decoration overlay */}
                            {(previewAvatar || profile?.activeAvatarDecoration) && (
                              <AvatarDecoration decorationType={previewAvatar || profile?.activeAvatarDecoration} />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl mt-2 font-bold">{displayName || profile?.displayName || 'Your Name'}</h3>
                    <p className="text-sm opacity-80 mt-1">{bio || profile?.bio || 'Your bio will appear here'}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-cosmic-text-secondary">
                This is how your profile will appear to others
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Profile Image</label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={imagePreview || profile?.photoURL || '/default-avatar.png'}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full cosmic-input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full cosmic-input"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Game Tiers</label>
            {GAME_MODES.map((mode) => (
              <div key={mode.value} className="flex items-center space-x-4 mb-4">
                <span className="w-24">{mode.label}:</span>
                <select
                  value={gameTiers[mode.value] || ''}
                  onChange={(e) => setGameTiers(prev => ({
                    ...prev,
                    [mode.value]: e.target.value as TierValue
                  }))}
                  className="px-4 py-2 cosmic-input"
                >
                  <option value="">Select Tier</option>
                  {TIER_OPTIONS.map((tier) => (
                    <option key={tier.value} value={tier.value}>{tier.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-space-blue/30 border border-space-purple/30 backdrop-blur-sm">
            <h3 className="text-lg font-medium mb-2">Team Creation Access</h3>
            <p className="text-sm">
              Status: {profile?.canCreateTeams ? (
                <span className="text-green-500 font-medium">Enabled</span>
              ) : (
                <span className="text-yellow-500 font-medium">Not enabled - Contact an admin to request access</span>
              )}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-space-blue/30 border border-space-purple/30 backdrop-blur-sm">
            <h3 className="text-lg font-medium mb-2">Avatar Decoration</h3>
            <p className="text-sm mb-4">
              Select an avatar decoration from your purchased items to display on your profile.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {/* No decoration option */}
              <div 
                className={`p-2 border rounded-lg cursor-pointer transition-all ${!profile?.activeAvatarDecoration ? 'border-space-gold bg-space-indigo/30' : 'border-space-indigo/30 hover:border-space-cyan'}`}
                onClick={() => {
                  updateProfileData({ activeAvatarDecoration: "" });
                  setPreviewAvatar(null);
                }}
              >
                <div className="relative w-16 h-16 mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-space-indigo to-space-purple">
                    <span className="text-white font-bold">CT</span>
                  </div>
                </div>
                <p className="text-center text-xs mt-2">None</p>
              </div>
              
              {/* Only show decorations the user has purchased */}
              {profile?.purchasedItems?.filter(item => item.startsWith('avatar-'))?.map((itemId) => {
                // Extract the effect name from the itemId
                const effectName = itemId.replace('avatar-', '');
                const isActive = profile.activeAvatarDecoration === effectName;
                
                return (
                  <div 
                    key={itemId}
                    className={`p-2 border rounded-lg cursor-pointer transition-all ${isActive ? 'border-space-gold bg-space-indigo/30' : 'border-space-indigo/30 hover:border-space-cyan'}`}
                    onClick={() => {
                      updateProfileData({ activeAvatarDecoration: effectName });
                      setPreviewAvatar(effectName);
                    }}
                    onMouseEnter={() => setPreviewAvatar(effectName)}
                    onMouseLeave={() => setPreviewAvatar(profile?.activeAvatarDecoration || null)}
                  >
                    <div className="relative w-16 h-16 mx-auto">
                    {effectName.includes('neon-') ? (
                      <NeonAvatarFrame 
                        type={effectName.replace('neon-', '') as NeonFrameStyle} 
                        size={64}
                      >
                        <img 
                          src={profile?.photoURL || '/default-avatar.png'} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                      </NeonAvatarFrame>
                    ) : (
                      <>
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img 
                            src={profile?.photoURL || '/default-avatar.png'} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Render avatar decoration */}
                        <AvatarDecoration decorationType={effectName} />
                      </>
                    )}
                    </div>
                    <p className="text-center text-xs mt-2">{effectName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                  </div>
                );
              })}
            </div>
            
            {(!profile?.purchasedItems || profile.purchasedItems.filter(item => item.startsWith('avatar-')).length === 0) && (
              <p className="text-sm text-cosmic-text-secondary mt-2">
                You haven't purchased any avatar decorations yet. Visit the <a href="/marketplace" className="text-space-cyan hover:underline">Marketplace</a> to get some!
              </p>
            )}
          </div>

          {/* Profile Background Selection */}
          <div className="p-4 rounded-lg bg-space-blue/30 border border-space-purple/30 backdrop-blur-sm">
            <h3 className="text-lg font-medium mb-2">Profile Background</h3>
            <p className="text-sm mb-4">
              Select a background to use on your profile. You can acquire more backgrounds from the marketplace.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Default/None background option */}
              <div 
                className={`p-2 border rounded-lg cursor-pointer transition-all ${!profile?.activeProfileBackground ? 'border-space-gold bg-space-indigo/30' : 'border-space-indigo/30 hover:border-space-cyan'}`}
                onClick={() => {
                  updateProfileData({ activeProfileBackground: "" });
                  setPreviewBackground(null);
                }}
              >
                <div className="relative w-full h-16 rounded-lg overflow-hidden mx-auto bg-gradient-to-br from-space-dark to-space-dark/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">Default</span>
                  </div>
                </div>
                <p className="text-center text-xs mt-2">Default</p>
              </div>
              
              {/* Standard background options */}
              <div 
                className={`p-2 border rounded-lg cursor-pointer transition-all ${profile?.activeProfileBackground === 'galaxy' ? 'border-space-gold bg-space-indigo/30' : 'border-space-indigo/30 hover:border-space-cyan'}`}
                onClick={() => {
                  updateProfileData({ activeProfileBackground: "galaxy" });
                  setPreviewBackground("galaxy");
                }}
                onMouseEnter={() => setPreviewBackground("galaxy")}
                onMouseLeave={() => setPreviewBackground(profile?.activeProfileBackground || null)}
              >
                <div className="relative w-full h-16 rounded-lg overflow-hidden mx-auto">
                  <img 
                    src="/profile-backgrounds/galaxy.png" 
                    alt="Galaxy" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If PNG fails, try JPG
                      (e.target as HTMLImageElement).src = '/profile-backgrounds/galaxy.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-center justify-center">
                    <span className="text-white font-bold drop-shadow-md">Galaxy</span>
                  </div>
                </div>
                <p className="text-center text-xs mt-2">Galaxy</p>
              </div>
              
              {/* Premium background options */}
              {[
                { id: 'neon-grid', name: 'Neon Grid' },
                { id: 'galaxy-swirl', name: 'Galaxy Swirl' },
                { id: 'aurora-waves', name: 'Aurora Waves' },
                { id: 'cosmic-stars', name: 'Cosmic Stars' }
              ].map((bg) => {
                // Check if this background is active using multiple possible formats
                const isActive = 
                  profile?.activeProfileBackground === bg.id || 
                  profile?.activeProfileBackground === `profile-${bg.id}`;
                
                // Background should be available if it's in purchased items or we're allowing all backgrounds
                const backgroundId = `bg-${bg.id}`;
                const isPurchased = profile?.purchasedItems?.includes(backgroundId);
                
                return (
                  <div 
                    key={bg.id}
                    className={`p-2 border rounded-lg cursor-pointer transition-all 
                      ${isActive ? 'border-space-gold bg-space-indigo/30' : 
                        'border-space-indigo/30 hover:border-space-cyan'}`}
                    onClick={() => {
                      // Allow selection of all backgrounds without restrictions
                      updateProfileData({ activeProfileBackground: bg.id });
                      setPreviewBackground(bg.id);
                    }}
                    onMouseEnter={() => setPreviewBackground(bg.id)}
                    onMouseLeave={() => setPreviewBackground(profile?.activeProfileBackground || null)}
                  >
                <div className="relative w-full h-16 rounded-lg overflow-hidden mx-auto">
                  {/* Apply a themed background as fallback based on the background type */}
                  <div className={`absolute inset-0 ${
                    bg.id === 'neon-grid' ? 'bg-gradient-to-r from-purple-900 to-blue-900' :
                    bg.id === 'galaxy-swirl' ? 'bg-gradient-to-r from-indigo-900 to-purple-900' :
                    bg.id === 'aurora-waves' ? 'bg-gradient-to-r from-green-900 to-cyan-900' :
                    'bg-gradient-to-r from-blue-900 to-indigo-800'
                  }`}></div>
                  
                  {/* Add distinctive visual elements for each background type */}
                  {bg.id === 'neon-grid' && (
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
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300 shadow-glow top-1/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300 shadow-glow top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300 shadow-glow top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300 shadow-glow top-3/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  )}
                  
                  {/* Galaxy swirl specific elements */}
                  {bg.id === 'galaxy-swirl' && (
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-indigo-800/30 mix-blend-overlay rounded-full scale-75 animate-spin-slow"></div>
                      <div className="absolute inset-0 bg-purple-700/40 mix-blend-overlay rounded-full scale-50 animate-spin-slow-reverse"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-1/4 left-1/3 shadow-glow animate-twinkle"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-3/5 left-3/4 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-2/3 left-1/4 shadow-glow animate-twinkle-delay-2"></div>
                    </div>
                  )}
                  
                  {/* Aurora waves specific elements */}
                  {bg.id === 'aurora-waves' && (
                    <div className="absolute inset-0">
                      <div className="absolute h-3 left-0 right-0 bottom-1/3 bg-gradient-to-r from-cyan-500/40 via-green-400/40 to-teal-300/40 blur-sm animate-aurora"></div>
                      <div className="absolute h-3 left-0 right-0 bottom-2/3 bg-gradient-to-r from-teal-300/40 via-cyan-500/40 to-green-400/40 blur-sm animate-aurora-delay"></div>
                      <div className="absolute h-2 left-0 right-0 bottom-1/2 bg-gradient-to-r from-green-400/40 via-teal-300/40 to-cyan-500/40 blur-sm animate-aurora-reverse"></div>
                    </div>
                  )}
                  
                  {/* Cosmic stars specific elements */}
                  {bg.id === 'cosmic-stars' && (
                    <div className="absolute inset-0">
                      <div className="w-1 h-1 bg-white rounded-full absolute top-1/4 left-1/4 shadow-glow animate-twinkle"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-3/4 left-2/4 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-1/2 left-3/4 shadow-glow animate-twinkle-delay-2"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-1/3 left-1/2 shadow-glow animate-twinkle"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-2/3 left-1/5 shadow-glow animate-twinkle-delay-1"></div>
                      <div className="w-1 h-1 bg-white rounded-full absolute top-1/5 left-3/4 shadow-glow animate-twinkle-delay-2"></div>
                    </div>
                  )}
                  
                  {/* Background image with comprehensive fallbacks */}
                  <img 
                    src={`/profile-backgrounds/${bg.id}.png`} 
                    alt={bg.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.onerror = null; // Prevent infinite loop
                      
                      // Build an array of all possible paths to try
                      const pathsToTry = [
                        `/profile-backgrounds/${bg.id}.jpg`,               // Try .jpg extension
                        `/profile-backgrounds/profile-${bg.id}.png`,       // Try with prefix, .png
                        `/profile-backgrounds/profile-${bg.id}.jpg`,       // Try with prefix, .jpg
                      ];
                      
                      // Try the first alternative
                      if (pathsToTry.length > 0) {
                        imgElement.src = pathsToTry[0];
                        
                        // Setup a cascade of fallbacks
                        let fallbackIndex = 1;
                        imgElement.onerror = function tryNextPath() {
                          if (fallbackIndex < pathsToTry.length) {
                            imgElement.src = pathsToTry[fallbackIndex++];
                          } else {
                            // If all paths failed, make the element transparent but keep the fallback
                            imgElement.style.opacity = "0.3";
                            imgElement.onerror = null;
                          }
                        };
                      }
                    }}
                  />
                  
                  {/* Overlay text with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-center justify-center">
                    <span className="text-white font-bold drop-shadow-md">{bg.name}</span>
                  </div>
                </div>
                    <p className="text-center text-xs mt-2">{bg.name}</p>
                  </div>
                );
              })}
              
              {/* Get More link */}
              <a href="/marketplace" className="cursor-pointer">
                <div className="p-2 border border-dashed rounded-lg transition-all border-space-indigo/30 hover:border-space-cyan hover:bg-space-blue/20">
                  <div className="relative w-full h-16 rounded-lg overflow-hidden mx-auto flex items-center justify-center bg-space-dark/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-space-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-center text-xs mt-2">Get More</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || updating}
              className="btn-gradient disabled:opacity-50"
            >
              {isSubmitting || updating ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
