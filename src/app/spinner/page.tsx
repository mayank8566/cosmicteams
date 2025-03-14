'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import HeaderWrapper from '@/components/HeaderWrapper';
import Link from 'next/link';

// Define possible prizes for the spinner
const PRIZES = [
  { id: 1, tokens: 10, probability: 0.30, label: '10 Tokens', color: 'from-blue-500 to-blue-700' },
  { id: 2, tokens: 25, probability: 0.25, label: '25 Tokens', color: 'from-green-500 to-green-700' },
  { id: 3, tokens: 50, probability: 0.20, label: '50 Tokens', color: 'from-yellow-500 to-yellow-700' },
  { id: 4, tokens: 100, probability: 0.15, label: '100 Tokens', color: 'from-orange-500 to-orange-700' },
  { id: 5, tokens: 200, probability: 0.07, label: '200 Tokens', color: 'from-red-500 to-red-700' },
  { id: 6, tokens: 500, probability: 0.03, label: '500 Tokens', color: 'from-purple-500 to-purple-700' },
];

// Broke Crate prizes (normal rewards)
const BROKE_CRATE_PRIZES = [
  { id: 1, tokens: 20, probability: 0.35, label: '20 Tokens', color: 'from-blue-500 to-blue-700' },
  { id: 2, tokens: 35, probability: 0.30, label: '35 Tokens', color: 'from-green-500 to-green-700' },
  { id: 3, tokens: 75, probability: 0.20, label: '75 Tokens', color: 'from-yellow-500 to-yellow-700' },
  { id: 4, tokens: 150, probability: 0.10, label: '150 Tokens', color: 'from-orange-500 to-orange-700' },
  { id: 5, tokens: 250, probability: 0.05, label: '250 Tokens', color: 'from-red-500 to-red-700' },
];

// Legend Crate prizes (premium rewards)
const LEGEND_CRATE_PRIZES = [
  { id: 1, tokens: 100, probability: 0.30, label: '100 Tokens', color: 'from-blue-500 to-blue-700' },
  { id: 2, tokens: 250, probability: 0.25, label: '250 Tokens', color: 'from-green-500 to-green-700' },
  { id: 3, tokens: 500, probability: 0.20, label: '500 Tokens', color: 'from-yellow-500 to-yellow-700' },
  { id: 4, tokens: 1000, probability: 0.15, label: '1000 Tokens', color: 'from-orange-500 to-orange-700' },
  { id: 5, reward: 'avatar', probability: 0.05, label: 'Rare Avatar', color: 'from-pink-500 to-pink-700' },
  { id: 6, reward: 'banner', probability: 0.03, label: 'Team Banner', color: 'from-purple-500 to-purple-700' },
  { id: 7, reward: 'decoration', probability: 0.02, label: 'Profile Decoration', color: 'from-indigo-500 to-indigo-700' },
];

// A max of 5 spins per day
const MAX_DAILY_SPINS = 5;
// A max of 5 broke crate opens per day
const MAX_DAILY_BROKE_CRATE = 5;
// A max of 2 legend crate opens per day
const MAX_DAILY_LEGEND_CRATE = 2;
// Cooldown period in ms (24 hours)
const COOLDOWN_PERIOD = 24 * 60 * 60 * 1000;

// Crate types enum
const CRATE_TYPES = {
  SPINNER: 'spinner',
  BROKE: 'broke',
  LEGEND: 'legend'
};

export default function SpinnerPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile, updateProfileData, loading } = useProfile();
  
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState<typeof PRIZES[0] | null>(null);
  const [spinAngle, setSpinAngle] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [spinsRemaining, setSpinsRemaining] = useState(0);
  const [cooldownTime, setCooldownTime] = useState<number | null>(null);
  const [spinHistory, setSpinHistory] = useState<{time: number, prize: typeof PRIZES[0], type?: string}[]>([]);
  
  // New state for crates
  const [activeCrateType, setActiveCrateType] = useState<string>(CRATE_TYPES.SPINNER);
  const [brokeCrateRemaining, setBrokeCrateRemaining] = useState(0);
  const [legendCrateRemaining, setLegendCrateRemaining] = useState(0);
  const [brokeCrateCooldown, setBrokeCrateCooldown] = useState<number | null>(null);
  const [legendCrateCooldown, setLegendCrateCooldown] = useState<number | null>(null);
  const [openingCrate, setOpeningCrate] = useState(false);
  const [cratePrize, setCratePrize] = useState<any | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (profile) {
      const currentTime = Date.now();
      const currentDate = new Date(currentTime).setHours(0, 0, 0, 0);
      
      // Get spinner usage
      const spinnerUsed = profile.spinnerUsed || 0;
      const lastSpinTime = profile.lastSpinTime || 0;
      const lastSpinDate = new Date(lastSpinTime).setHours(0, 0, 0, 0);
      
      // Get broke crate usage
      const brokeCrateUsed = profile.brokeCrateUsed || 0;
      const lastBrokeCrateTime = profile.lastBrokeCrateTime || 0;
      const lastBrokeCrateDate = new Date(lastBrokeCrateTime).setHours(0, 0, 0, 0);
      
      // Get legend crate usage
      const legendCrateUsed = profile.legendCrateUsed || 0;
      const lastLegendCrateTime = profile.lastLegendCrateTime || 0;
      const lastLegendCrateDate = new Date(lastLegendCrateTime).setHours(0, 0, 0, 0);
      
      // Load spin history
      const history = profile.spinHistory || [];
      setSpinHistory(history);
      
      // Check if we need to reset spinner (new day)
      if (currentDate > lastSpinDate) {
        // It's a new day, reset spins
        setSpinsRemaining(MAX_DAILY_SPINS);
        setCooldownTime(null);
        
        // Reset spinner usage if it's a new day
        if (spinnerUsed > 0) {
          updateProfileData({
            spinnerUsed: 0,
            lastSpinTime: currentTime
          }).catch(err => console.error('Error resetting spinner usage:', err));
        }
      } else {
        setSpinsRemaining(MAX_DAILY_SPINS - spinnerUsed);
        if (spinnerUsed >= MAX_DAILY_SPINS) {
          // Set cooldown to end at midnight tonight
          const tomorrow = new Date(currentDate);
          tomorrow.setDate(tomorrow.getDate() + 1);
          setCooldownTime(tomorrow.getTime());
        }
      }
      
      // Check if we need to reset broke crate (new day)
      if (currentDate > lastBrokeCrateDate) {
        // It's a new day, reset broke crate
        setBrokeCrateRemaining(MAX_DAILY_BROKE_CRATE);
        setBrokeCrateCooldown(null);
        
        // Reset broke crate usage if it's a new day
        if (brokeCrateUsed > 0) {
          updateProfileData({
            brokeCrateUsed: 0,
            lastBrokeCrateTime: currentTime
          }).catch(err => console.error('Error resetting broke crate usage:', err));
        }
      } else {
        setBrokeCrateRemaining(MAX_DAILY_BROKE_CRATE - brokeCrateUsed);
        if (brokeCrateUsed >= MAX_DAILY_BROKE_CRATE) {
          // Set cooldown to end at midnight tonight
          const tomorrow = new Date(currentDate);
          tomorrow.setDate(tomorrow.getDate() + 1);
          setBrokeCrateCooldown(tomorrow.getTime());
        }
      }
      
      // Check if we need to reset legend crate (new day)
      if (currentDate > lastLegendCrateDate) {
        // It's a new day, reset legend crate
        setLegendCrateRemaining(MAX_DAILY_LEGEND_CRATE);
        setLegendCrateCooldown(null);
        
        // Reset legend crate usage if it's a new day
        if (legendCrateUsed > 0) {
          updateProfileData({
            legendCrateUsed: 0,
            lastLegendCrateTime: currentTime
          }).catch(err => console.error('Error resetting legend crate usage:', err));
        }
      } else {
        setLegendCrateRemaining(MAX_DAILY_LEGEND_CRATE - legendCrateUsed);
        if (legendCrateUsed >= MAX_DAILY_LEGEND_CRATE) {
          // Set cooldown to end at midnight tonight
          const tomorrow = new Date(currentDate);
          tomorrow.setDate(tomorrow.getDate() + 1);
          setLegendCrateCooldown(tomorrow.getTime());
        }
      }
    }
  }, [user, profile, router, updateProfileData]);

  const formatTimeRemaining = (targetTime: number) => {
    const remaining = Math.max(0, targetTime - Date.now());
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  };

  const spinWheel = async () => {
    if (spinning || !profile || spinsRemaining <= 0) return;
    
    setSpinning(true);
    setMessage(null);
    setPrize(null);
    
    // Generate a random number between 0 and 1
    const random = Math.random();
    
    // Determine prize based on probability
    let cumulativeProbability = 0;
    let selectedPrize = PRIZES[0];
    
    for (const prize of PRIZES) {
      cumulativeProbability += prize.probability;
      if (random <= cumulativeProbability) {
        selectedPrize = prize;
        break;
      }
    }
    
    // Calculate rotation angle (between 720 and 1080 degrees + offset for the prize)
    const baseRotation = 2 * 360 + Math.random() * 360; // 2-3 full rotations
    const segmentAngle = 360 / PRIZES.length;
    const prizeIndex = PRIZES.findIndex(p => p.id === selectedPrize.id);
    const prizeAngle = prizeIndex * segmentAngle;
    const finalAngle = baseRotation + prizeAngle;
    
    setSpinAngle(finalAngle);
    
    // Wait for spinning animation to complete
    setTimeout(async () => {
      setPrize(selectedPrize);
      
      try {
        // Calculate new values first
        const newUsed = (profile.spinnerUsed || 0) + 1;
        const currentTokens = profile.cosmicTokens || 0;
        const newTokens = currentTokens + selectedPrize.tokens;
        const currentTime = Date.now();
        const newHistory = [...(profile.spinHistory || []), {
          time: currentTime,
          prize: selectedPrize,
          type: CRATE_TYPES.SPINNER
        }];
        
        // Limit history to last 10 spins
        if (newHistory.length > 10) {
          newHistory.shift(); // Remove oldest entry
        }
        
        // First update local state immediately
        setMessage(`Congratulations! You won ${selectedPrize.tokens} Cosmic Tokens! Your new balance: ${newTokens} Tokens.`);
        setSpinsRemaining(MAX_DAILY_SPINS - newUsed);
        setSpinHistory(newHistory);
        
        // Then update database - wrap in try/catch with specific error handling
        try {
          await updateProfileData({
            cosmicTokens: newTokens,
            spinnerUsed: newUsed,
            lastSpinTime: currentTime,
            spinHistory: newHistory
          });
          
          if (newUsed >= MAX_DAILY_SPINS) {
            // Set cooldown to end at midnight tonight
            const currentDate = new Date().setHours(0, 0, 0, 0);
            const tomorrow = new Date(currentDate);
            tomorrow.setDate(tomorrow.getDate() + 1);
            setCooldownTime(tomorrow.getTime());
          }
        } catch (dbError) {
          console.error('Database update error:', dbError);
          // Even if the database update fails, we keep the UI updated
          // This prevents the "Error updating your tokens. Please try again. Your new balance: 0 Tokens." error message
          // We'll just show a more informative message
          setMessage(`You won ${selectedPrize.tokens} tokens! Balance: ${newTokens} Tokens. (Changes will sync on next refresh)`);
        }
      } catch (error) {
        console.error('Error in token update process:', error);
        setMessage(`Error processing your spin. Please refresh the page. Your current balance: ${profile.cosmicTokens || 0} Tokens.`);
      } finally {
        setSpinning(false);
      }
    }, 3000);
  };

  const openCrate = async (crateType: string) => {
    if (openingCrate || !profile) return;
    
    // Check if user has remaining crate opens
    if (crateType === CRATE_TYPES.BROKE && brokeCrateRemaining <= 0) return;
    if (crateType === CRATE_TYPES.LEGEND && legendCrateRemaining <= 0) return;
    
    setOpeningCrate(true);
    setMessage(null);
    setCratePrize(null);
    
    // Select prize list based on crate type
    const prizeList = crateType === CRATE_TYPES.BROKE ? BROKE_CRATE_PRIZES : LEGEND_CRATE_PRIZES;
    
    // Generate a random number between 0 and 1
    const random = Math.random();
    
    // Determine prize based on probability
    let cumulativeProbability = 0;
    let selectedPrize = prizeList[0];
    
    for (const prize of prizeList) {
      cumulativeProbability += prize.probability;
      if (random <= cumulativeProbability) {
        selectedPrize = prize;
        break;
      }
    }
    
    // Wait for the crate opening animation
    setTimeout(async () => {
      setCratePrize(selectedPrize);
      
      try {
        const currentTime = Date.now();
        const currentTokens = profile.cosmicTokens || 0;
        let newTokens = currentTokens;
        let rewardMessage = '';
        
        // Update values based on crate type
        const updateData: Partial<ProfileData> = {
          lastSpinTime: currentTime
        };
        
        // Handle different reward types
        if ('tokens' in selectedPrize && selectedPrize.tokens !== undefined) {
          newTokens = currentTokens + selectedPrize.tokens;
          updateData.cosmicTokens = newTokens;
          rewardMessage = `${selectedPrize.tokens} Cosmic Tokens`;
        } else if ('reward' in selectedPrize) {
          // Handle special rewards (avatar, banner, decoration)
          const rewardType = selectedPrize.reward;
          
          if (rewardType === 'avatar') {
            // Give a random rare avatar
            const avatarId = `rare_avatar_${Math.floor(Math.random() * 10) + 1}`;
            const avatars = [...(profile.avatars || [])];
            if (!avatars.includes(avatarId)) {
              avatars.push(avatarId);
              updateData.avatars = avatars;
            }
            rewardMessage = 'a Rare Avatar';
          } 
          else if (rewardType === 'banner') {
            // Give a random team banner
            const bannerId = `team_banner_${Math.floor(Math.random() * 5) + 1}`;
            const banners = [...(profile.teamBanners || [])];
            if (!banners.includes(bannerId)) {
              banners.push(bannerId);
              updateData.teamBanners = banners;
            }
            rewardMessage = 'a Team Banner';
          }
          else if (rewardType === 'decoration') {
            // Give a random profile decoration
            const decorationId = `profile_decoration_${Math.floor(Math.random() * 7) + 1}`;
            const decorations = [...(profile.profileDecorations || [])];
            if (!decorations.includes(decorationId)) {
              decorations.push(decorationId);
              updateData.profileDecorations = decorations;
            }
            rewardMessage = 'a Profile Decoration';
          }
        }
        
        // Update crate usage based on type
        if (crateType === CRATE_TYPES.BROKE) {
          const newUsed = (profile.brokeCrateUsed || 0) + 1;
          updateData.brokeCrateUsed = newUsed;
          updateData.lastBrokeCrateTime = currentTime;
          setBrokeCrateRemaining(MAX_DAILY_BROKE_CRATE - newUsed);
          
          if (newUsed >= MAX_DAILY_BROKE_CRATE) {
            const currentDate = new Date().setHours(0, 0, 0, 0);
            const tomorrow = new Date(currentDate);
            tomorrow.setDate(tomorrow.getDate() + 1);
            setBrokeCrateCooldown(tomorrow.getTime());
          }
        } else if (crateType === CRATE_TYPES.LEGEND) {
          const newUsed = (profile.legendCrateUsed || 0) + 1;
          updateData.legendCrateUsed = newUsed;
          updateData.lastLegendCrateTime = currentTime;
          setLegendCrateRemaining(MAX_DAILY_LEGEND_CRATE - newUsed);
          
          if (newUsed >= MAX_DAILY_LEGEND_CRATE) {
            const currentDate = new Date().setHours(0, 0, 0, 0);
            const tomorrow = new Date(currentDate);
            tomorrow.setDate(tomorrow.getDate() + 1);
            setLegendCrateCooldown(tomorrow.getTime());
          }
        }
        
        // Add to spin history
        const newHistory = [...(profile.spinHistory || []), {
          time: currentTime,
          prize: selectedPrize,
          type: crateType
        }];
        
        // Limit history to last 10 spins
        if (newHistory.length > 10) {
          newHistory.shift(); // Remove oldest entry
        }
        
        updateData.spinHistory = newHistory;
        setSpinHistory(newHistory);
        
        // Set success message
        if ('tokens' in selectedPrize) {
          setMessage(`Congratulations! You found ${rewardMessage} in the crate! Your new balance: ${newTokens} Tokens.`);
        } else {
          setMessage(`Congratulations! You found ${rewardMessage} in the crate!`);
        }
        
        // Update database
        try {
          await updateProfileData(updateData);
        } catch (dbError) {
          console.error('Database update error:', dbError);
          setMessage(`You found ${rewardMessage}! (Changes will sync on next refresh)`);
        }
        
      } catch (error) {
        console.error('Error in crate opening process:', error);
        setMessage('Error opening the crate. Please refresh the page and try again.');
      } finally {
        setOpeningCrate(false);
      }
    }, 2000);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full"></div>
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
          <div className="absolute w-96 h-96 rounded-full bg-space-purple/20 blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
          <div className="absolute w-80 h-80 rounded-full bg-space-indigo/20 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
          <div className="absolute w-64 h-64 rounded-full bg-space-cyan/10 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold font-space mb-2 animate-fade-in-up">
            <span className="gradient-text cosmic-gradient">Cosmic Rewards</span>
          </h1>
          <p className="text-cosmic-text-secondary mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Spin the wheel or open crates to earn tokens and rare collectibles!
          </p>
          
          {/* Tab Navigation */}
          <div className="flex mb-8 justify-center space-x-2 md:space-x-4 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <button 
              onClick={() => setActiveCrateType(CRATE_TYPES.SPINNER)}
              className={`px-4 py-3 font-bold transition-all duration-300 relative ${
                activeCrateType === CRATE_TYPES.SPINNER 
                ? 'text-space-cyan bg-space-dark/80 border-b-2 border-space-cyan cosmic-shadow-sm'
                : 'text-cosmic-text-secondary hover:text-white'
              }`}
            >
              Daily Spinner
              <span className="ml-2 py-0.5 px-1.5 text-xs bg-space-purple/30 rounded-full">{spinsRemaining}</span>
            </button>
            
            <button 
              onClick={() => setActiveCrateType(CRATE_TYPES.BROKE)}
              className={`px-4 py-3 font-bold transition-all duration-300 relative ${
                activeCrateType === CRATE_TYPES.BROKE 
                ? 'text-space-cyan bg-space-dark/80 border-b-2 border-space-cyan cosmic-shadow-sm'
                : 'text-cosmic-text-secondary hover:text-white'
              }`}
            >
              Broke Crate
              <span className="ml-2 py-0.5 px-1.5 text-xs bg-space-purple/30 rounded-full">{brokeCrateRemaining}</span>
            </button>
            
            <button 
              onClick={() => setActiveCrateType(CRATE_TYPES.LEGEND)}
              className={`px-4 py-3 font-bold transition-all duration-300 relative ${
                activeCrateType === CRATE_TYPES.LEGEND 
                ? 'text-space-cyan bg-space-dark/80 border-b-2 border-space-cyan cosmic-shadow-sm'
                : 'text-cosmic-text-secondary hover:text-white'
              }`}
            >
              Legend Crate
              <span className="ml-2 py-0.5 px-1.5 text-xs bg-space-purple/30 rounded-full">{legendCrateRemaining}</span>
            </button>
          </div>
          
          {/* Spinner Section */}
          {activeCrateType === CRATE_TYPES.SPINNER && (
            <div className="cosmic-card border border-space-purple/30 p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Spinner Wheel */}
                <div className="relative w-72 h-72 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-space-indigo cosmic-shadow-lg overflow-hidden">
                    {/* Wheel Segments */}
                    <div 
                      className="w-full h-full relative transition-transform duration-3000 ease-out"
                      style={{ transform: `rotate(${spinAngle}deg)` }}
                    >
                      {PRIZES.map((prize, index) => {
                        const angle = 360 / PRIZES.length;
                        const rotation = index * angle;
                        return (
                          <div 
                            key={prize.id}
                            className={`absolute w-1/2 h-1/2 top-0 left-1/2 origin-bottom-left bg-gradient-to-r ${prize.color}`}
                            style={{ transform: `rotate(${rotation}deg) skew(${90 - angle}deg)` }}
                          >
                            <div 
                              className="absolute top-6 left-1/2 -translate-x-1/2 transform -rotate-90 text-white font-bold text-sm whitespace-nowrap"
                              style={{ transform: `rotate(${-rotation - (angle/2)}deg) translateX(-50%) translateY(-20px)` }}
                            >
                              {prize.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Center point with animated glow effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-space-dark border-2 border-space-gold z-10 shadow-glow"></div>
                    </div>
                  </div>
                  
                  {/* Pointer with pulsing animation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-space-gold z-20 animate-pulse-slow"></div>
                </div>
                
                {/* Spinner Info */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-space-cyan">Daily Spins</h2>
                    <p className="mb-4">
                      <span className="text-3xl font-bold">{spinsRemaining}</span>
                      <span className="text-cosmic-text-secondary"> / {MAX_DAILY_SPINS} remaining</span>
                    </p>
                    
                    {cooldownTime && (
                      <div className="text-cosmic-text-secondary">
                        Resets in: <span className="text-space-gold">{formatTimeRemaining(cooldownTime)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-space-cyan">Your Balance</h2>
                    <p className="text-3xl font-bold text-space-gold">
                      {profile?.cosmicTokens || 0} <span className="text-lg">Tokens</span>
                    </p>
                  </div>
                  
                  <button
                    onClick={spinWheel}
                    disabled={spinning || spinsRemaining <= 0}
                    className={`btn-gradient py-3 px-8 text-lg w-full md:w-auto ${(spinning || spinsRemaining <= 0) ? 'opacity-50 cursor-not-allowed' : 'cosmic-shadow-sm hover:cosmic-shadow-md'}`}
                  >
                    {spinning ? (
                      <span className="flex items-center justify-center">
                        <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Spinning...
                      </span>
                    ) : spinsRemaining <= 0 ? 'No Spins Left Today' : 'Spin the Wheel!'}
                  </button>
                  
                  <div className="mt-4">
                    <Link href="/marketplace" className="text-space-cyan hover:text-space-pink transition-colors duration-200">
                      Visit the Marketplace →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Broke Crate Section */}
          {activeCrateType === CRATE_TYPES.BROKE && (
            <div className="cosmic-card border border-space-purple/30 p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Broke Crate Visualization */}
                <div className="relative w-64 h-64 mx-auto">
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${openingCrate ? 'scale-110 opacity-80' : ''}`}>
                    <div className="relative w-48 h-48 border-4 border-space-cyan/80 bg-gradient-to-b from-space-dark to-space-darker rounded-lg cosmic-shadow-lg overflow-hidden">
                      {/* Crate lid */}
                      <div className={`absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-space-cyan/30 to-space-indigo/20 border-b-2 border-space-cyan/50 transition-all duration-1000 origin-bottom ${openingCrate ? '-translate-y-full rotate-45' : ''}`}></div>
                      
                      {/* Crate glow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-full h-full bg-space-indigo/10 transition-all duration-1000 ${openingCrate ? 'animate-pulse-fast' : ''}`}></div>
                      </div>
                      
                      {/* Crate label */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-lg font-bold text-space-cyan mb-1">BROKE CRATE</div>
                        <div className="text-xs text-cosmic-text-secondary">Normal Rewards</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Broke Crate Info */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-space-cyan">Broke Crate</h2>
                    <p className="text-cosmic-text-secondary mb-4">
                      Standard crate with token rewards for players on a budget.
                    </p>
                    <p className="mb-4">
                      <span className="text-3xl font-bold">{brokeCrateRemaining}</span>
                      <span className="text-cosmic-text-secondary"> / {MAX_DAILY_BROKE_CRATE} remaining</span>
                    </p>
                    
                    {brokeCrateCooldown && (
                      <div className="text-cosmic-text-secondary">
                        Resets in: <span className="text-space-gold">{formatTimeRemaining(brokeCrateCooldown)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-space-cyan">Your Balance</h2>
                    <p className="text-3xl font-bold text-space-gold">
                      {profile?.cosmicTokens || 0} <span className="text-lg">Tokens</span>
                    </p>
                  </div>
                  
                  <button
                    onClick={() => openCrate(CRATE_TYPES.BROKE)}
                    disabled={openingCrate || brokeCrateRemaining <= 0}
                    className={`btn-gradient py-3 px-8 text-lg w-full md:w-auto ${(openingCrate || brokeCrateRemaining <= 0) ? 'opacity-50 cursor-not-allowed' : 'cosmic-shadow-sm hover:cosmic-shadow-md'}`}
                  >
                    {openingCrate && activeCrateType === CRATE_TYPES.BROKE ? (
                      <span className="flex items-center justify-center">
                        <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Opening...
                      </span>
                    ) : brokeCrateRemaining <= 0 ? 'No Crates Left Today' : 'Open Broke Crate'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Legend Crate Section */}
          {activeCrateType === CRATE_TYPES.LEGEND && (
            <div className="cosmic-card border border-space-purple/30 p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Legend Crate Visualization */}
                <div className="relative w-64 h-64 mx-auto">
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${openingCrate ? 'scale-110 opacity-80' : ''}`}>
                    <div className="relative w-48 h-48 border-4 border-space-gold/80 bg-gradient-to-b from-space-dark to-space-darker rounded-lg cosmic-shadow-lg overflow-hidden">
                      {/* Crate lid */}
                      <div className={`absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-space-gold/30 to-space-pink/20 border-b-2 border-space-gold/50 transition-all duration-1000 origin-bottom ${openingCrate ? '-translate-y-full rotate-45' : ''}`}></div>
                      
                      {/* Crate glow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-full h-full bg-space-gold/10 transition-all duration-1000 ${openingCrate ? 'animate-pulse-fast' : ''}`}></div>
                      </div>
                      
                      {/* Crate label */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-lg font-bold text-space-gold mb-1">LEGEND CRATE</div>
                        <div className="text-xs text-cosmic-text-secondary">Premium Rewards</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legend Crate Info */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-space-gold">Legend Crate</h2>
                    <p className="text-cosmic-text-secondary mb-4">
                      Premium crate with rare rewards like avatars, team banners, and decorations.
                    </p>
                    <p className="mb-4">
                      <span className="text-3xl font-bold">{legendCrateRemaining}</span>
                      <span className="text-cosmic-text-secondary"> / {MAX_DAILY_LEGEND_CRATE} remaining</span>
                    </p>
                    
                    {legendCrateCooldown && (
                      <div className="text-cosmic-text-secondary">
                        Resets in: <span className="text-space-gold">{formatTimeRemaining(legendCrateCooldown)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-space-gold">Your Balance</h2>
                    <p className="text-3xl font-bold text-space-gold">
                      {profile?.cosmicTokens || 0} <span className="text-lg">Tokens</span>
                    </p>
                  </div>
                  
                  <button
                    onClick={() => openCrate(CRATE_TYPES.LEGEND)}
                    disabled={openingCrate || legendCrateRemaining <= 0}
                    className={`btn-gradient py-3 px-8 text-lg w-full md:w-auto ${(openingCrate || legendCrateRemaining <= 0) ? 'opacity-50 cursor-not-allowed' : 'cosmic-shadow-sm hover:cosmic-shadow-md'}`}
                  >
                    {openingCrate && activeCrateType === CRATE_TYPES.LEGEND ? (
                      <span className="flex items-center justify-center">
                        <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Opening...
                      </span>
                    ) : legendCrateRemaining <= 0 ? 'No Crates Left Today' : 'Open Legend Crate'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Prize Notification */}
          {(prize || cratePrize) && (
            <div className="cosmic-card border border-space-gold/50 p-6 text-center animate-bounce-in mb-8">
              <div className="text-2xl font-bold text-space-gold mb-2">{message}</div>
              <p>Your new balance: <span className="font-bold">{profile?.cosmicTokens || 0} Tokens</span></p>
            </div>
          )}
          
          {/* Spin History Section */}
          {spinHistory.length > 0 && (
            <div className="cosmic-card border border-space-purple/30 p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl font-bold mb-4 text-center">Recent Rewards History</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {spinHistory.map((item, index) => (
                  <div key={index} className="p-3 border border-space-indigo/30 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        {'tokens' in item.prize ? (
                          <div className="text-lg font-bold text-space-gold">+{item.prize.tokens} Tokens</div>
                        ) : 'reward' in item.prize ? (
                          <div className="text-lg font-bold text-space-gold">{item.prize.label}</div>
                        ) : (
                          <div className="text-lg font-bold text-space-gold">Unknown Reward</div>
                        )}
                        <div className="text-xs text-cosmic-text-secondary">{new Date(item.time).toLocaleString()}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r ${item.prize.color}`}>
                          {item.prize.label}
                        </div>
                        {item.type && (
                          <div className="px-2 py-0.5 rounded-full text-xs bg-space-dark">
                            {item.type === CRATE_TYPES.SPINNER ? 'Spinner' : 
                             item.type === CRATE_TYPES.BROKE ? 'Broke' : 'Legend'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Prize Legend based on active crate type */}
          {activeCrateType === CRATE_TYPES.SPINNER && (
            <div className="cosmic-card border border-space-cyan/30 p-6 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="text-xl font-bold mb-4 text-center">Spinner Prizes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {PRIZES.map(prize => (
                  <div key={prize.id} className={`p-3 rounded-lg bg-gradient-to-r ${prize.color} text-white text-center`}>
                    <div className="text-xl font-bold">{prize.tokens}</div>
                    <div className="text-sm">Cosmic Tokens</div>
                    <div className="text-xs mt-1">{Math.round(prize.probability * 100)}% chance</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeCrateType === CRATE_TYPES.BROKE && (
            <div className="cosmic-card border border-space-cyan/30 p-6 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="text-xl font-bold mb-4 text-center">Broke Crate Prizes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {BROKE_CRATE_PRIZES.map(prize => (
                  <div key={prize.id} className={`p-3 rounded-lg bg-gradient-to-r ${prize.color} text-white text-center`}>
                    <div className="text-xl font-bold">{prize.tokens}</div>
                    <div className="text-sm">Cosmic Tokens</div>
                    <div className="text-xs mt-1">{Math.round(prize.probability * 100)}% chance</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeCrateType === CRATE_TYPES.LEGEND && (
            <div className="cosmic-card border border-space-cyan/30 p-6 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="text-xl font-bold mb-4 text-center">Legend Crate Prizes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {LEGEND_CRATE_PRIZES.map(prize => (
                  <div key={prize.id} className={`p-3 rounded-lg bg-gradient-to-r ${prize.color} text-white text-center`}>
                    {'tokens' in prize ? (
                      <>
                        <div className="text-xl font-bold">{prize.tokens}</div>
                        <div className="text-sm">Cosmic Tokens</div>
                      </>
                    ) : 'reward' in prize ? (
                      <>
                        <div className="text-xl font-bold">{prize.label}</div>
                        <div className="text-sm">Special Item</div>
                      </>
                    ) : null}
                    <div className="text-xs mt-1">{Math.round(prize.probability * 100)}% chance</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
