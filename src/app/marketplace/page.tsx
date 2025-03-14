'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import HeaderWrapper from '@/components/HeaderWrapper';
import dynamic from 'next/dynamic';
// Import Firebase functions
// @ts-ignore - TypeScript doesn't correctly recognize Firebase imports
import { doc, getDoc, updateDoc, arrayUnion, DocumentReference } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

// Lazy-load preview components for better performance
const LogoEffectPreview = dynamic(() => import('@/components/marketplace/LogoEffectPreview'), {
  loading: () => <div className="w-16 h-16 mx-auto bg-space-blue/30 rounded-full animate-pulse"></div>,
  ssr: false, // Disable server-side rendering to reduce server load
});

const BannerEffectPreview = dynamic(() => import('@/components/marketplace/BannerEffectPreview'), {
  loading: () => <div className="w-full h-8 bg-space-blue/30 rounded-md animate-pulse"></div>,
  ssr: false,
});

const BackgroundEffectPreview = dynamic(() => import('@/components/marketplace/BackgroundEffectPreview'), {
  loading: () => <div className="w-full h-12 bg-space-blue/30 rounded-md animate-pulse"></div>,
  ssr: false,
});

const ProfileEffectPreview = dynamic(() => import('@/components/marketplace/ProfileEffectPreview'), {
  loading: () => <div className="w-full h-16 bg-space-blue/30 rounded-md animate-pulse"></div>,
  ssr: false,
});

const AvatarEffectPreview = dynamic(() => import('@/components/marketplace/AvatarEffectPreview'), {
  loading: () => <div className="w-16 h-16 mx-auto bg-space-blue/30 rounded-full animate-pulse"></div>,
  ssr: false,
});

// Define marketplace item types
interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'banner' | 'logo' | 'background' | 'boost' | 'feature' | 'avatar' | 'profile';
  image: string;
  effect?: string;
  preview?: React.ReactNode;
}

export default function MarketplacePage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile, updateProfileData } = useProfile();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [purchasing, setPurchasing] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [userItems, setUserItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Import NeonAvatarFrame component for use in the lazy-loaded AvatarEffectPreview 
  // The import has been moved to the separate component file
  
  // Marketplace items
  const marketplaceItems: MarketplaceItem[] = [
    // New deadly-looking neon avatar frames
    { 
      id: 'avatar-neon-inferno', 
      name: 'Inferno Frame', 
      description: 'A deadly-looking frame with blood-red neon flames that pulse and glow.',
      price: 2000, 
      category: 'avatar', 
      image: '/marketplace/avatar-neon-inferno.png',
      effect: 'neon-inferno',
      preview: <AvatarEffectPreview effect="neon-inferno" />
    },
    { 
      id: 'avatar-neon-vortex', 
      name: 'Vortex Frame', 
      description: 'A deadly-looking electric blue neon frame that constantly rotates around your avatar.',
      price: 2200, 
      category: 'avatar', 
      image: '/marketplace/avatar-neon-vortex.png',
      effect: 'neon-vortex',
      preview: <AvatarEffectPreview effect="neon-vortex" />
    },
    { 
      id: 'avatar-neon-shadow', 
      name: 'Shadow Frame', 
      description: 'A deadly-looking dark purple neon frame that flickers ominously like a shadow.',
      price: 2500, 
      category: 'avatar', 
      image: '/marketplace/avatar-neon-shadow.png',
      effect: 'neon-shadow',
      preview: <AvatarEffectPreview effect="neon-shadow" />
    },
    { 
      id: 'avatar-neon-toxic', 
      name: 'Toxic Frame', 
      description: 'A deadly-looking radioactive green neon frame that shifts colors like toxic waste.',
      price: 2800, 
      category: 'avatar', 
      image: '/marketplace/avatar-neon-toxic.png',
      effect: 'neon-toxic',
      preview: <AvatarEffectPreview effect="neon-toxic" />
    },
    { 
      id: 'avatar-neon-cyber', 
      name: 'Cyber Frame', 
      description: 'A deadly-looking cyberpunk yellow neon frame with circuit patterns that pulse rapidly.',
      price: 3000, 
      category: 'avatar', 
      image: '/marketplace/avatar-neon-cyber.png',
      effect: 'neon-cyber',
      preview: <AvatarEffectPreview effect="neon-cyber" />
    },
    { 
      id: 'banner-gradient', 
      name: 'Gradient Team Banner', 
      description: 'A smooth gradient banner for your team profile.',
      price: 300, 
      category: 'banner', 
      image: '/marketplace/banner-gradient.png',
      effect: 'gradient',
      preview: <BannerEffectPreview effect="gradient" />
    },
    { 
      id: 'banner-animated', 
      name: 'Animated Team Banner', 
      description: 'A flowing animated gradient banner that catches attention.',
      price: 500, 
      category: 'banner', 
      image: '/marketplace/banner-animated.png',
      effect: 'animated',
      preview: <BannerEffectPreview effect="animated" />
    },
    { 
      id: 'banner-cosmic', 
      name: 'Cosmic Team Banner', 
      description: 'A deep space banner with subtle star effects.',
      price: 700, 
      category: 'banner', 
      image: '/marketplace/banner-cosmic.png',
      effect: 'cosmic',
      preview: <BannerEffectPreview effect="cosmic" />
    },
    { 
      id: 'banner-sparkle', 
      name: 'Sparkle Team Banner', 
      description: 'A banner with twinkling star effects.',
      price: 800, 
      category: 'banner', 
      image: '/marketplace/banner-sparkle.png',
      effect: 'sparkle',
      preview: <BannerEffectPreview effect="sparkle" />
    },
    { 
      id: 'logo-rotating', 
      name: 'Rotating Logo Effect', 
      description: 'Make your team logo slowly rotate for a dynamic look.',
      price: 1000, 
      category: 'logo', 
      image: '/marketplace/logo-rotating.png',
      effect: 'rotating',
      preview: <LogoEffectPreview effect="rotating" />
    },
    { 
      id: 'logo-glowing', 
      name: 'Glowing Logo Effect', 
      description: 'Add a pulsing glow effect to your team logo.',
      price: 1200, 
      category: 'logo', 
      image: '/marketplace/logo-glowing.png',
      effect: 'glowing',
      preview: <LogoEffectPreview effect="glowing" />
    },
    { 
      id: 'logo-particles', 
      name: 'Particle Logo Effect', 
      description: 'Small particles float up around your team logo.',
      price: 1500, 
      category: 'logo', 
      image: '/marketplace/logo-particles.png',
      effect: 'particles',
      preview: <LogoEffectPreview effect="particles" />
    },
    { 
      id: 'logo-plasma-ring', 
      name: 'Plasma Ring Logo Effect', 
      description: 'A plasma ring effect that surrounds your team logo.',
      price: 1800, 
      category: 'logo', 
      image: '/marketplace/logo-plasma-ring.png',
      effect: 'plasma-ring',
      preview: <LogoEffectPreview effect="plasma-ring" />
    },
    { 
      id: 'logo-neon-burst', 
      name: 'Neon Burst Logo Effect', 
      description: 'A neon burst effect that surrounds your team logo.',
      price: 2000, 
      category: 'logo', 
      image: '/marketplace/logo-neon-burst.png',
      effect: 'neon-burst',
      preview: <LogoEffectPreview effect="neon-burst" />
    },
    { 
      id: 'logo-hologram', 
      name: 'Hologram Logo Effect', 
      description: 'A hologram effect that makes your team logo look futuristic.',
      price: 2200, 
      category: 'logo', 
      image: '/marketplace/logo-hologram.png',
      effect: 'hologram',
      preview: <LogoEffectPreview effect="hologram" />
    },
    { 
      id: 'logo-fire-aura', 
      name: 'Fire Aura Logo Effect', 
      description: 'A fire aura effect that surrounds your team logo.',
      price: 2500, 
      category: 'logo', 
      image: '/marketplace/logo-fire-aura.png',
      effect: 'fire-aura',
      preview: <LogoEffectPreview effect="fire-aura" />
    },
    { 
      id: 'bg-nebula', 
      name: 'Nebula Background', 
      description: 'A cosmic nebula background for your team page.',
      price: 800, 
      category: 'background', 
      image: '/marketplace/bg-nebula.png',
      effect: 'nebula',
      preview: <BackgroundEffectPreview effect="nebula" />
    },
    { 
      id: 'bg-aurora', 
      name: 'Aurora Background', 
      description: 'Northern lights inspired animated background.',
      price: 1000, 
      category: 'background', 
      image: '/marketplace/bg-aurora.png',
      effect: 'aurora',
      preview: <BackgroundEffectPreview effect="aurora" />
    },
    { 
      id: 'bg-space', 
      name: 'Deep Space Background', 
      description: 'A dark space background with subtle stars.',
      price: 1200, 
      category: 'background', 
      image: '/marketplace/bg-space.png',
      effect: 'space',
      preview: <BackgroundEffectPreview effect="space" />
    },
    { 
      id: 'bg-galaxy', 
      name: 'Galaxy Background', 
      description: 'A colorful galaxy background with animation.',
      price: 1500, 
      category: 'background', 
      image: '/marketplace/bg-galaxy.png',
      effect: 'galaxy',
      preview: <BackgroundEffectPreview effect="galaxy" />
    },
    { 
      id: 'boost-daily', 
      name: 'Daily Points Boost (7 days)', 
      description: 'Earn 10% more team points for 7 days.',
      price: 1000, 
      category: 'boost', 
      image: '/marketplace/boost-daily.png'
    },
    { 
      id: 'feature-analytics', 
      name: 'Team Analytics Pro', 
      description: 'Unlock advanced team performance analytics.',
      price: 2000, 
      category: 'feature', 
      image: '/marketplace/feature-analytics.png'
    },
    { 
      id: 'avatar-gold-frame', 
      name: 'Gold Frame Avatar Decoration', 
      description: 'A luxurious gold frame for your team avatar.',
      price: 800, 
      category: 'avatar', 
      image: '/marketplace/avatar-gold-frame.png',
      effect: 'gold-frame',
      preview: <AvatarEffectPreview effect="gold-frame" />
    },
    { 
      id: 'avatar-cosmic-frame', 
      name: 'Cosmic Spinner Frame', 
      description: 'A rotating cosmic frame for your avatar that draws attention.',
      price: 1500, 
      category: 'avatar', 
      image: '/marketplace/avatar-cosmic-frame.png',
      effect: 'cosmic-frame',
      preview: <AvatarEffectPreview effect="cosmic-frame" />
    },
    { 
      id: 'avatar-silver-frame', 
      name: 'Silver Elite Frame', 
      description: 'A sleek silver frame for your team avatar.',
      price: 1000, 
      category: 'avatar', 
      image: '/marketplace/avatar-silver-frame.png',
      effect: 'silver-frame',
      preview: <AvatarEffectPreview effect="silver-frame" />
    },
    { 
      id: 'avatar-diamond-frame', 
      name: 'Rainbow Diamond Frame', 
      description: 'A premium diamond frame with color-shifting effects.',
      price: 2000, 
      category: 'avatar', 
      image: '/marketplace/avatar-diamond-frame.png',
      effect: 'diamond-frame',
      preview: <AvatarEffectPreview effect="diamond-frame" />
    },
    { 
      id: 'avatar-crown', 
      name: 'Crown Avatar Decoration', 
      description: 'A royal crown for your team avatar.',
      price: 1000, 
      category: 'avatar', 
      image: '/marketplace/avatar-crown.png',
      effect: 'crown',
      preview: <AvatarEffectPreview effect="crown" />
    },
    { 
      id: 'avatar-cosmic-aura', 
      name: 'Cosmic Aura Avatar Decoration', 
      description: 'A cosmic aura effect for your team avatar.',
      price: 1200, 
      category: 'avatar', 
      image: '/marketplace/avatar-cosmic-aura.png',
      effect: 'cosmic-aura',
      preview: <AvatarEffectPreview effect="cosmic-aura" />
    },
    { 
      id: 'avatar-stars', 
      name: 'Stars Avatar Decoration', 
      description: 'Twinkling stars around your team avatar.',
      price: 1500, 
      category: 'avatar', 
      image: '/marketplace/avatar-stars.png',
      effect: 'stars',
      preview: <AvatarEffectPreview effect="stars" />
    },
    { 
      id: 'avatar-halo', 
      name: 'Halo Avatar Decoration', 
      description: 'A shining halo for your team avatar.',
      price: 1800, 
      category: 'avatar', 
      image: '/marketplace/avatar-halo.png',
      effect: 'halo',
      preview: <AvatarEffectPreview effect="halo" />
    },
    { 
      id: 'profile-cosmic-stars', 
      name: 'Cosmic Stars Background', 
      description: 'Adds a beautiful starry cosmic background to your profile page.',
      price: 1200, 
      category: 'background', 
      image: '/marketplace/profile-cosmic-stars.png',
      effect: 'cosmic-stars',
      preview: <ProfileEffectPreview effect="cosmic-stars" />
    },
    { 
      id: 'profile-aurora-waves', 
      name: 'Aurora Waves Background', 
      description: 'Adds flowing aurora wave effects to your profile page background.',
      price: 1500, 
      category: 'background', 
      image: '/marketplace/profile-aurora-waves.png',
      effect: 'aurora-waves',
      preview: <ProfileEffectPreview effect="aurora-waves" />
    },
    { 
      id: 'profile-plasma-field', 
      name: 'Plasma Field Background', 
      description: 'Adds a dynamic plasma field effect to your profile page.',
      price: 1800, 
      category: 'background', 
      image: '/marketplace/profile-plasma-field.png',
      effect: 'plasma-field',
      preview: <ProfileEffectPreview effect="plasma-field" />
    },
    { 
      id: 'profile-neon-grid', 
      name: 'Neon Grid Background', 
      description: 'Adds a cyberpunk-inspired neon grid effect to your profile.',
      price: 2000, 
      category: 'background', 
      image: '/marketplace/profile-neon-grid.png',
      effect: 'neon-grid',
      preview: <ProfileEffectPreview effect="neon-grid" />
    },
    { 
      id: 'profile-galaxy-swirl', 
      name: 'Galaxy Swirl Background', 
      description: 'Adds a mesmerizing galaxy swirl effect to your profile background.',
      price: 2200, 
      category: 'background', 
      image: '/marketplace/profile-galaxy-swirl.png',
      effect: 'galaxy-swirl',
      preview: <ProfileEffectPreview effect="galaxy-swirl" />
    },
  ];
  
  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    
    const fetchUserItems = async () => {
      try {
        setIsLoading(true);
        if (user.email) {
          const userDoc = doc(db, 'users', user.email);
          const userSnapshot = await getDoc(userDoc);
          
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setUserItems(userData.purchasedItems || []);
          }
        }
      } catch (error) {
        console.error('Error fetching user items:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserItems();
  }, [user, router]);
  
  const filteredItems = activeCategory === 'all' 
    ? marketplaceItems 
    : marketplaceItems.filter(item => item.category === activeCategory);

  const handlePurchase = async (item: MarketplaceItem) => {
    if (!user || !profile) {
      setPurchaseMessage({ type: 'error', text: 'You must be logged in to make purchases.' });
      return;
    }
    
    if (userItems.includes(item.id)) {
      setPurchaseMessage({ type: 'error', text: 'You already own this item.' });
      return;
    }
    
    const userTokens = profile.cosmicTokens || 0;
    
    if (userTokens < item.price) {
      setPurchaseMessage({ type: 'error', text: `Not enough tokens. You need ${item.price - userTokens} more tokens.` });
      return;
    }
    
    try {
      setPurchasing(true);
      setPurchaseMessage(null);
      
      // Update user's token balance and purchased items
      const userDoc = doc(db, 'userProfiles', user.uid);
      
      // Create update object
      const updateData: any = {
        cosmicTokens: userTokens - item.price,
        purchasedItems: arrayUnion(item.id)
      };
      
      // Also add to the appropriate category array based on item type
      if (item.category === 'background') {
        updateData.backgrounds = arrayUnion(item.id);
      } else if (item.category === 'banner') {
        updateData.teamBanners = arrayUnion(item.id);
      } else if (item.category === 'avatar') {
        updateData.avatars = arrayUnion(item.id);
      } else if (item.category === 'profile') {
        updateData.profileDecorations = arrayUnion(item.id);
      }
      
      // Update Firestore
      await updateDoc(userDoc, updateData);
      
      // Update local profile state
      const profileUpdate: any = {
        cosmicTokens: userTokens - item.price,
        purchasedItems: [...(profile.purchasedItems || []), item.id]
      };
      
      // Update local arrays in profile state
      if (item.category === 'background') {
        profileUpdate.backgrounds = [...((profile as any).backgrounds || []), item.id];
      } else if (item.category === 'banner') {
        profileUpdate.teamBanners = [...((profile as any).teamBanners || []), item.id];
      } else if (item.category === 'avatar') {
        profileUpdate.avatars = [...((profile as any).avatars || []), item.id];
      } else if (item.category === 'profile') {
        profileUpdate.profileDecorations = [...((profile as any).profileDecorations || []), item.id];
      }
      
      // Update profile context
      await updateProfileData(profileUpdate);
      
      // Update local items list
      setUserItems(prev => [...prev, item.id]);
      
      setPurchaseMessage({ type: 'success', text: `Successfully purchased ${item.name}!` });
    } catch (error) {
      console.error('Error purchasing item:', error);
      setPurchaseMessage({ type: 'error', text: 'Error processing your purchase. Please try again.' });
    } finally {
      setPurchasing(false);
    }
  };

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
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-4xl font-bold font-space mb-2 animate-fade-in-up">
                <span className="gradient-text cosmic-gradient">Marketplace</span>
              </h1>
              <p className="text-cosmic-text-secondary animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Upgrade your team with exclusive items and features
              </p>
            </div>
            
            <div className="flex items-center space-x-2 p-3 bg-space-blue/30 rounded-lg border border-space-blue/40">
              <div className="text-space-gold font-bold">
                {profile?.cosmicTokens || 0}
              </div>
              <div className="text-sm text-cosmic-text-secondary">Cosmic Tokens</div>
              <Link href="/spinner" className="btn-gradient-secondary text-sm py-1 px-3 ml-2">
                Get More
              </Link>
            </div>
          </div>
          
          {/* Purchase Message */}
          {purchaseMessage && (
            <div className={`mb-6 p-4 rounded-lg border ${purchaseMessage.type === 'success' ? 'bg-green-900/30 border-green-500/50 text-green-300' : 'bg-red-900/30 border-red-500/50 text-red-300'} animate-fade-in`}>
              {purchaseMessage.text}
            </div>
          )}
          
          {/* Categories Navigation */}
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-2 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              All Items
            </button>
            <button 
              onClick={() => setActiveCategory('banner')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'banner' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              Team Banners
            </button>
            <button 
              onClick={() => setActiveCategory('logo')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'logo' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              Logo Effects
            </button>
            <button 
              onClick={() => setActiveCategory('background')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'background' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              Backgrounds
            </button>
            <button 
              onClick={() => setActiveCategory('boost')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'boost' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              Boosts
            </button>
            <button 
              onClick={() => setActiveCategory('feature')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'feature' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              Premium Features
            </button>
            <button 
              onClick={() => setActiveCategory('avatar')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'avatar' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`}
            >
              Avatars
            </button>
          </div>
          
          {/* Marketplace Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {filteredItems.map((item) => {
              const isOwned = userItems.includes(item.id);
              return (
                <div key={item.id} className="cosmic-card border border-space-purple/30 cosmic-shadow-sm hover:cosmic-shadow-md transition-all group overflow-hidden">
                  <div className="h-48 bg-space-blue/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-space-indigo/10 to-space-purple/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.preview ? item.preview : (
                        <div className="text-6xl opacity-70">
                          🚀
                        </div>
                      )}
                    </div>
                    
                    {isOwned && (
                      <div className="absolute top-2 right-2 bg-space-gold text-space-dark text-xs font-bold px-2 py-1 rounded-full">
                        OWNED
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-space-cyan transition-colors">{item.name}</h3>
                    <p className="text-cosmic-text-secondary text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-semibold text-space-gold">{item.price} tokens</div>
                      <button 
                        onClick={() => !isOwned && handlePurchase(item)}
                        disabled={isOwned || purchasing}
                        className={`px-3 py-1 rounded-md font-medium text-sm transition ${isOwned ? 'bg-space-blue/30 text-cosmic-text-secondary cursor-default' : 'btn-gradient-secondary'}`}
                      >
                        {isOwned ? 'Owned' : purchasing ? 'Processing...' : 'Purchase'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-12 cosmic-card border border-space-cyan/30 p-6 text-center">
            <h2 className="text-2xl font-bold text-space-cyan mb-2">More Items Coming Soon!</h2>
            <p className="text-cosmic-text-secondary">
              The Cosmic Teams marketplace is being expanded with new items regularly. 
              Earn Cosmic Tokens with the <Link href="/spinner" className="text-space-cyan hover:underline">Cosmic Spinner</Link> to purchase these items!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
