'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import ClientImage from './ClientImage';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const { profile } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll events for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;
      
      try {
        const userDoc = await getDoc(doc(db, 'users', user.email as string));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(userData.role === 'admin');
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAdminStatus();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  // Default placeholder avatar
  const defaultAvatar = '/images/default-avatar.svg';

  // Render avatar content based on profile
  const renderAvatar = () => {
    if (profile?.photoURL) {
      return (
        <ClientImage 
          src={profile.photoURL} 
          alt="Profile" 
          width={36} 
          height={36} 
          className="object-cover w-full h-full"
          fallbackSrc={defaultAvatar}
          priority
        />
      );
    } else {
      return (
        <div className="w-full h-full flex items-center justify-center bg-space-indigo text-white font-bold text-lg">
          {profile?.displayName ? profile.displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || 'U'}
        </div>
      );
    }
  };

  return (
    <header className={`w-full py-4 px-6 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-space-dark/90 shadow-lg' : 'bg-space-dark/80 border-b border-space-purple/20'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center link-prefetch">
          <div className="font-space font-bold text-xl">
            <span className="text-white">COSMIC</span>
            <span className="text-space-purple cosmic-glow ml-1">TEAMS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`font-medium transition-colors duration-200 hover:text-space-cyan link-prefetch ${
              pathname === '/' ? 'text-space-cyan' : 'text-white/80'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors duration-200 hover:text-space-cyan link-prefetch ${
              pathname === '/about' ? 'text-space-cyan' : 'text-white/80'
            }`}
          >
            About
          </Link>
          <Link
            href="/features"
            className={`font-medium transition-colors duration-200 hover:text-space-cyan link-prefetch ${
              pathname === '/features' ? 'text-space-cyan' : 'text-white/80'
            }`}
          >
            Features
          </Link>
          <Link
            href="/marketplace"
            className={`font-medium transition-colors duration-200 hover:text-space-cyan link-prefetch ${
              pathname === '/marketplace' ? 'text-space-cyan' : 'text-white/80'
            }`}
          >
            MarketPlace
          </Link>
          <Link
            href="/tier"
            className={`font-medium transition-colors duration-200 hover:text-space-cyan link-prefetch ${
              pathname === '/tier' ? 'text-space-cyan' : 'text-white/80'
            }`}
          >
            Game Tiers
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative" ref={profileMenuRef}>
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-3 py-1 px-2 rounded-lg hover:bg-space-blue/30 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-space-purple/50">
                  {renderAvatar()}
                </div>
                <span className="hidden md:inline-block font-medium text-white">
                  {profile?.displayName || user.email?.split('@')[0] || 'User'}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-space-blue/90 backdrop-blur-md border border-space-purple/30 rounded-lg shadow-xl py-2 z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                  <div className="px-4 py-2 border-b border-space-purple/20">
                    <p className="text-sm font-medium text-white">{profile?.displayName || 'User'}</p>
                    <p className="text-xs text-white/60 truncate">{profile?.email}</p>
                  </div>
                  
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-white hover:bg-space-indigo/30 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Edit Profile</span>
                    </div>
                  </Link>
                  
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-white hover:bg-space-indigo/30 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span>Dashboard</span>
                    </div>
                  </Link>
                  
                  <Link
                    href="/tier"
                    className="block px-4 py-2 text-sm text-white hover:bg-space-indigo/30 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Game Tiers</span>
                    </div>
                  </Link>
                  
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-white hover:bg-space-indigo/30 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Settings</span>
                    </div>
                  </Link>
                  
                  <Link
                    href="/mail"
                    className="block px-4 py-2 text-sm text-white hover:bg-space-indigo/30 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Mail</span>
                    </div>
                  </Link>
                  
                  {isAdmin && (
                    <Link
                      href="/admin/token-management"
                      className="block px-4 py-2 text-sm text-space-gold hover:bg-space-indigo/30 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Admin: Token Management</span>
                      </div>
                    </Link>
                  )}
                  
                  <div className="border-t border-space-purple/20 my-1"></div>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-space-pink/30 transition-colors"
                  >
                    <div className="flex items-center text-space-pink">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>Sign out</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="btn-gradient-secondary text-sm link-prefetch">
                <span>Login</span>
              </Link>
              <Link href="/register" className="btn-gradient text-sm hidden md:inline-block link-prefetch">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
} 