'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile, GameMode, TierValue } from '@/lib/ProfileContext';
import ClientImage from '@/components/ClientImage';

// Game mode information
const GAME_MODES: { value: GameMode; label: string; icon: string }[] = [
  { value: 'neth-op', label: 'Nether OP', icon: '/images/neth-op.svg' },
  { value: 'axe', label: 'Axe', icon: '/images/axe.svg' },
  { value: 'smp', label: 'SMP', icon: '/images/smp.svg' },
  { value: 'cpvp', label: 'Crystal PVP', icon: '/images/cpvp.svg' },
  { value: 'sword', label: 'Sword', icon: '/images/sword.svg' },
  { value: 'uhc', label: 'UHC', icon: '/images/uhc.svg' }
];

export default function TierPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile, loading } = useProfile();
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Redirect if not logged in
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Map tier to appropriate class for styling
  const getTierClass = (tier: TierValue) => {
    if (tier.startsWith('LT')) {
      return `tier-lt tier-lt-${tier.charAt(2)}`;
    } else {
      return `tier-ht tier-ht-${tier.charAt(2)}`;
    }
  };

  // If loading or not logged in, show loading state
  if (!mounted || loading || !user || !profile) {
    return (
      <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
        <div id="loading-screen">
          <div className="line-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text">Your Game Tiers</h1>
      
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 relative mb-4">
            <ClientImage 
              src={profile.photoURL || '/images/default-avatar.svg'}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full object-cover mx-auto border-4 border-purple-600"
              fallbackSrc="/images/default-avatar.svg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-white">{profile.displayName}</h2>
        </div>
        
        {/* Tier Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {GAME_MODES.map((mode) => (
            <div key={mode.value} className="tier-card">
              <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/80 transition-all duration-300 flex flex-col items-center">
                <div className="n-icon mb-2">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center p-2 border-2 border-purple-500">
                    <img 
                      src={mode.icon} 
                      alt={mode.label} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{mode.label}</h3>
                <div className={`cur-tier ${getTierClass(profile.gameTiers?.[mode.value] || 'LT1')}`}>
                  <p className="text-2xl font-bold">{profile.gameTiers?.[mode.value] || 'LT1'}</p>
                </div>
                <div className="mt-2 text-sm text-gray-300">
                  {profile.gameTiers?.[mode.value].startsWith('LT') ? 'Low Tier' : 'High Tier'} {profile.gameTiers?.[mode.value].charAt(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={() => router.push('/profile')}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Update Your Tiers
          </button>
        </div>
      </div>
    </div>
  );
} 