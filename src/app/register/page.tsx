'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import HeaderWrapper from '@/components/HeaderWrapper';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();
  const { signUp, signInWithGoogle, user } = useAuth();

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
    setError('');

    if (!email || !password || !confirmPassword || !username) {
      return setError('Please fill out all fields');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    if (username.length < 3) {
      return setError('Username must be at least 3 characters');
    }

    // Check if username contains only alphanumeric characters and underscores
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return setError('Username can only contain letters, numbers, and underscores');
    }

    setLoading(true);

    try {
      await signUp(email, password, username);
      router.push('/');
    } catch (error: any) {
      // Provide user-friendly error messages
      if (error.code === 'auth/email-already-in-use') {
        setError('This email address is already in use. Please try a different email or sign in.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email format. Please enter a valid email address.');
      } else {
        setError(error.message || 'Failed to create an account');
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
              <h1 className="text-3xl font-space font-bold mb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>Join The Cosmos</h1>
              <p className="text-white/70 animate-fade-in-up" style={{ animationDelay: '400ms' }}>Create your account and start exploring</p>
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

              <div className="animate-fade-in-up" style={{ animationDelay: '550ms' }}>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="cosmic_explorer"
                />
                <p className="mt-1 text-xs text-white/60">Only letters, numbers, and underscores</p>
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

              <div className="animate-fade-in-up" style={{ animationDelay: '650ms' }}>
                <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-space-purple/50 bg-space-blue/50 focus:ring-space-cyan"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white/70">
                  I agree to the{' '}
                  <Link href="/terms" className="text-space-cyan hover:text-space-indigo hover:underline transition-all">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-space-cyan hover:text-space-indigo hover:underline transition-all">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gradient w-full flex justify-center items-center group animate-fade-in-up"
                style={{ animationDelay: '750ms' }}
              >
                {loading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                ) : (
                  <span className="group-hover:animate-pulse-light">Create Account</span>
                )}
              </button>
            </form>
            
            <div className="mt-6 relative animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-space-purple/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-space-blue text-white/70">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '850ms' }}>
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
                    <span className="group-hover:text-white transition-colors">Sign up with Google</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <p className="text-white/70">
                Already have an account?{' '}
                <Link href="/login" className="text-space-cyan hover:text-space-indigo hover:underline transition-all">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 