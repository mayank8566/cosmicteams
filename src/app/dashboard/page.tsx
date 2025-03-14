'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import HeaderWrapper from '@/components/HeaderWrapper';

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-space-cyan"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />

      <div className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="cosmic-card mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-space font-bold mb-2">Welcome to Your Dashboard</h1>
                <p className="text-white/70">
                  Hello, {user.email}! Your cosmic journey continues here.
                </p>
              </div>
              <button onClick={handleLogout} className="btn-secondary">
                Sign Out
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cosmic-card hover:cosmic-glow transition-all duration-300">
              <h2 className="text-xl font-space font-bold mb-4 text-space-cyan">Your Teams</h2>
              <p className="text-white/70 mb-4">You haven't joined any teams yet.</p>
              <button className="btn-primary w-full">Create a Team</button>
            </div>

            <div className="cosmic-card hover:cosmic-glow transition-all duration-300">
              <h2 className="text-xl font-space font-bold mb-4 text-space-pink">Recent Activity</h2>
              <div className="space-y-4">
                <p className="text-white/70">No recent activity to display.</p>
              </div>
            </div>

            <div className="cosmic-card hover:cosmic-glow transition-all duration-300">
              <h2 className="text-xl font-space font-bold mb-4 text-space-yellow">Upcoming Events</h2>
              <div className="space-y-4">
                <p className="text-white/70">No upcoming events scheduled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 