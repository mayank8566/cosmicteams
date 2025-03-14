'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import HeaderWrapper from '@/components/HeaderWrapper';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();
  const { signIn, signInWithGoogle, user } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
    
    // Trigger fade-in animation
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      router.push('/');
    } catch (error: any) {
      // Provide user-friendly error messages
      if (error.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed login attempts. Please try again later or reset your password.');
      } else {
        setError(error.message || 'Failed to sign in');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setGoogleLoading(true);

    try {
      await signInWithGoogle();
      // Don't need to redirect here as the useEffect will handle it once user state updates
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        setError('An error occurred with Google sign in. Please try again.');
        console.error("Google sign in error:", error);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className={`w-full max-w-md transform transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="cosmic-card cosmic-glow">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-space font-bold mb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>Welcome Back</h1>
              <p className="text-white/70 animate-fade-in-up" style={{ animationDelay: '400ms' }}>Sign in to continue your cosmic journey</p>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-6 animate-shake">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-space-purple/50 bg-space-blue/50 focus:ring-space-cyan"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="text-space-cyan hover:text-space-indigo hover:scale-105 inline-block transition-all">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gradient w-full flex justify-center items-center group animate-fade-in-up"
                style={{ animationDelay: '800ms' }}
              >
                {loading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                ) : (
                  <span className="group-hover:animate-pulse-light">Sign In</span>
                )}
              </button>
            </form>
            
            <div className="mt-6 relative animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-space-purple/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-space-blue text-white/70">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={googleLoading}
                className="w-full flex justify-center items-center gap-3 py-2.5 border border-space-purple/50 rounded-lg bg-space-blue/40 hover:bg-space-blue/70 transition-all duration-300 group"
              >
                {googleLoading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                ) : (
                  <>
                    <svg className="w-5 h-5 group-hover:animate-bounce-gentle" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="group-hover:text-white transition-colors">Sign in with Google</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
              <p className="text-white/70">
                Don't have an account?{' '}
                <Link href="/register" className="text-space-cyan hover:text-space-indigo hover:underline transition-all">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 