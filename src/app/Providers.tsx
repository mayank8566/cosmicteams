'use client';

import { useEffect } from 'react';
import { AuthProvider } from '../lib/AuthContext';
import { ProfileProvider } from '../lib/ProfileContext';
import { preloadCommonPages, optimizeAuthProcess } from '../lib/clientUtils';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Preload common pages for faster navigation
    preloadCommonPages();
    
    // Optimize auth process
    optimizeAuthProcess();
  }, []);
  
  return (
    <AuthProvider>
      <ProfileProvider>
        {children}
      </ProfileProvider>
    </AuthProvider>
  );
} 