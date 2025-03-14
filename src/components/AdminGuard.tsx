'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/lib/AuthContext';

interface AdminGuardProps {
  children: ReactNode;
  fallbackUrl?: string;
}

export default function AdminGuard({ children, fallbackUrl = '/dashboard' }: AdminGuardProps) {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      router.push('/login');
      return;
    }

    const checkAdminStatus = async () => {
      try {
        // Allow direct access for alok905621@gmail.com
        if (user.email === 'alok905621@gmail.com') {
          setIsAdmin(true);
          setIsLoading(false);
          return;
        }

        // Check if there's an admin session stored
        const adminAuth = sessionStorage.getItem('adminAuth');
        if (adminAuth === 'true') {
          setIsAdmin(true);
          setIsLoading(false);
          return;
        }

        const userDoc = await getDoc(doc(db, 'userProfiles', user.email || ''));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.role === 'admin') {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
            router.push(fallbackUrl);
          }
        } else {
          setIsAdmin(false);
          router.push(fallbackUrl);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
        router.push(fallbackUrl);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [user, authLoading, router, fallbackUrl]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-space-dark">
        <div className="cosmic-card p-8">
          <div className="animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full mx-auto"></div>
          <p className="text-center mt-4">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    return <>{children}</>;
  }

  // This should not render as router.push should redirect, but for safety
  return null;
}
