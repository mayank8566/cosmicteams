'use client';

import { useEffect, useRef } from 'react';
import HeaderWrapper from '@/components/HeaderWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { initScrollReveal } from '@/lib/clientUtils';
import BlitzTeamsSection from '@/components/BlitzTeamsSection';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  // Reference for scroll animation elements
  const featureRefs = useRef<HTMLDivElement[]>([]);
  
  // Add scroll animation effect
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Space background with animated stars and nebulas */}
        <div className="absolute inset-0 bg-space-dark overflow-hidden">
          {/* Animated nebula clouds */}
          <div className="absolute w-full h-full opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-space-indigo/30 via-space-purple/20 to-transparent transform rotate-12 animate-pulse-slow"></div>
            <div className="absolute top-1/4 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-space-pink/20 via-space-cyan/10 to-transparent transform -rotate-12 animate-pulse-slow delay-1000"></div>
          </div>
          
          {/* Stars */}
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full opacity-90 twinkle"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-80 twinkle-delay-1"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full opacity-70 twinkle-delay-2"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-60 twinkle-delay-3"></div>
          <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-white rounded-full opacity-75 twinkle-delay-4"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6">
              <span className="text-transparent bg-clip-text cosmic-gradient bg-gradient-shift">Cosmic Teams</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-cosmic-text-secondary">
              Collaborate with your teammates across the galaxy and embark on epic missions together
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/dashboard" className="btn-gradient btn-press btn-shine">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  <span>Dashboard</span>
                </span>
              </Link>
              <Link href="/create-team" className="btn-gradient-secondary btn-press">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.479m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span>Create Team</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating cosmic objects */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-space-purple/30 to-transparent rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-bl from-space-pink/20 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </section>
      
      {/* Feature boxes */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark/90 to-space-darker/90"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="cosmic-card border border-space-purple/30 cosmic-shadow-md p-6 transition-transform hover:translate-y-[-5px] reveal">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-space-indigo to-space-purple rounded-lg cosmic-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.479m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-space">Create Teams</h3>
              <p className="text-cosmic-text-secondary mb-4">Form your cosmic squad by inviting team members from across the galaxy.</p>
              <Link href="/create-team" className="text-space-cyan hover:text-space-cyan-light flex items-center gap-1 group">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="cosmic-card border border-space-cyan/30 cosmic-shadow-md p-6 transition-transform hover:translate-y-[-5px] reveal delay-300">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-space-blue to-space-cyan rounded-lg cosmic-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-space">Compete</h3>
              <p className="text-cosmic-text-secondary mb-4">Lead your team to the top of the cosmic leaderboard with stellar performances.</p>
              <Link href="/" className="text-space-cyan hover:text-space-cyan-light flex items-center gap-1 group">
                <span>View Leaderboard</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="cosmic-card border border-space-gold/30 cosmic-shadow-md p-6 transition-transform hover:translate-y-[-5px] reveal delay-600">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-space-gold to-space-pink rounded-lg cosmic-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-space">Achieve Greatness</h3>
              <p className="text-cosmic-text-secondary mb-4">Unlock cosmic achievements and rewards as your team progresses through missions.</p>
              <Link href="/dashboard" className="text-space-cyan hover:text-space-cyan-light flex items-center gap-1 group">
                <span>View Achievements</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leaderboard Section */}
      <BlitzTeamsSection />
      
      {/* Call to action section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-space-blue/30 via-space-purple/20 to-space-pink/10"></div>
        
        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full opacity-90 twinkle"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-80 twinkle-delay-1"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-70 twinkle-delay-2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
            <span className="text-transparent bg-clip-text cosmic-gradient">Ready to join the cosmic journey?</span>
          </h2>
          <p className="text-lg text-cosmic-text-secondary mb-10 max-w-2xl mx-auto">
            Create your team today and start your adventure across the galaxy!
          </p>
          
          <Link href="/create-team" className="btn-gradient btn-lg btn-press btn-shine inline-block">
            <span className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Get Started Now</span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
