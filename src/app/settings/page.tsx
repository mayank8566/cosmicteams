'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderWrapper from '@/components/HeaderWrapper';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import Image from 'next/image';

export default function SettingsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile, loading, error: profileError, updateProfileData, changePassword, changeEmail } = useProfile();
  
  // Form states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [emailCurrentPassword, setEmailCurrentPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameSuccess, setUsernameSuccess] = useState('');
  
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);
  const [isUsernameSubmitting, setIsUsernameSubmitting] = useState(false);
  
  // Customization states
  const [activeBackground, setActiveBackground] = useState('');
  const [applyingBackground, setApplyingBackground] = useState(false);
  const [backgroundSuccess, setBackgroundSuccess] = useState('');
  const [backgroundError, setBackgroundError] = useState('');
  
  // Background preview definitions
  const backgroundPreviews: Record<string, string> = {
    'default': 'Default',
    'nebula': 'Nebula',
    'aurora': 'Aurora',
    'space': 'Space',
    'galaxy': 'Galaxy',
    'cosmic-stars': 'Cosmic Stars',
    'aurora-waves': 'Aurora Waves',
    'plasma-field': 'Plasma Field',
    'neon-grid': 'Neon Grid',
    'galaxy-swirl': 'Galaxy Swirl',
  };
  
  // Handle auth redirect
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
    
    // Initialize email field from profile
    if (profile?.email) {
      setNewEmail(profile.email);
    }

    // Initialize username field from profile
    if (profile?.username) {
      setUsername(profile.username);
    }
    
    // Initialize active background
    if (profile?.activeBackground) {
      setActiveBackground(profile.activeBackground);
    }
  }, [user, loading, router, profile]);
  
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    
    // Validate passwords
    if (!currentPassword) {
      return setPasswordError('Current password is required');
    }
    
    if (!newPassword) {
      return setPasswordError('New password is required');
    }
    
    if (newPassword.length < 6) {
      return setPasswordError('Password must be at least 6 characters long');
    }
    
    if (newPassword !== confirmPassword) {
      return setPasswordError('New passwords do not match');
    }
    
    setIsPasswordSubmitting(true);
    
    try {
      await changePassword(currentPassword, newPassword);
      setPasswordSuccess('Password changed successfully!');
      
      // Clear form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setPasswordSuccess('');
      }, 3000);
    } catch (err: any) {
      if (err?.code === 'auth/wrong-password') {
        setPasswordError('Current password is incorrect');
      } else if (err?.code === 'auth/weak-password') {
        setPasswordError('Password is too weak. Please choose a stronger password.');
      } else {
        setPasswordError('Failed to change password. Please try again.');
      }
    } finally {
      setIsPasswordSubmitting(false);
    }
  };
  
  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setEmailSuccess('');
    
    // Validate email
    if (!newEmail) {
      return setEmailError('Email is required');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      return setEmailError('Please enter a valid email address');
    }
    
    if (!emailCurrentPassword) {
      return setEmailError('Current password is required to change email');
    }
    
    if (newEmail === profile?.email) {
      return setEmailError('New email is the same as your current email');
    }
    
    setIsEmailSubmitting(true);
    
    try {
      await changeEmail(emailCurrentPassword, newEmail);
      setEmailSuccess('Email changed successfully!');
      
      // Clear password field
      setEmailCurrentPassword('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setEmailSuccess('');
      }, 3000);
    } catch (err: any) {
      if (err?.code === 'auth/wrong-password') {
        setEmailError('Current password is incorrect');
      } else if (err?.code === 'auth/email-already-in-use') {
        setEmailError('This email is already in use by another account');
      } else if (err?.code === 'auth/invalid-email') {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('Failed to change email. Please try again.');
      }
    } finally {
      setIsEmailSubmitting(false);
    }
  };
  
  const handleUsernameChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setUsernameError('');
    setUsernameSuccess('');
    
    // Validate username
    if (!username.trim()) {
      return setUsernameError('Username is required');
    }
    
    // Check for spaces and special characters
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      return setUsernameError('Username can only contain letters, numbers, and underscores');
    }
    
    if (username === profile?.username) {
      return setUsernameError('New username is the same as your current username');
    }
    
    setIsUsernameSubmitting(true);
    
    try {
      // Update profile with new username
      await updateProfileData({
        username: username.trim()
      });
      
      setUsernameSuccess('Username updated successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setUsernameSuccess('');
      }, 3000);
    } catch (err) {
      console.error('Error updating username:', err);
      setUsernameError('Failed to update username. Please try again.');
    } finally {
      setIsUsernameSubmitting(false);
    }
  };
  
  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 flex items-center justify-center">
          <div className="cosmic-card p-8">
            <div className="animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full mx-auto"></div>
            <p className="text-center mt-4 text-white/70">Loading settings...</p>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-space font-bold mb-1 gradient-text cosmic-gradient animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Account Settings
          </h1>
          <p className="text-white/70 mb-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Manage your account security and preferences
          </p>
          
          {profileError && (
            <div className="bg-yellow-500/20 border border-yellow-500/50 text-white p-4 rounded-lg mb-6">
              {profileError}
            </div>
          )}
          
          {/* Change Password Section */}
          <div className="cosmic-card mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-space font-bold mb-4 text-space-cyan">
              Change Password
            </h2>
            
            {passwordError && (
              <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-4 animate-shake">
                {passwordError}
              </div>
            )}
            
            {passwordSuccess && (
              <div className="bg-green-500/20 border border-green-500/50 text-white p-3 rounded-lg mb-4 animate-fade-in-up">
                {passwordSuccess}
              </div>
            )}
            
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-white/60">
                  Must be at least 6 characters long
                </p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isPasswordSubmitting}
                  className="btn-gradient flex items-center space-x-2"
                >
                  {isPasswordSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                      <span>Updating...</span>
                    </>
                  ) : (
                    <span>Update Password</span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Change Email Section */}
          <div className="cosmic-card animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-space font-bold mb-4 text-space-cyan">
              Change Email
            </h2>
            
            {emailError && (
              <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-4 animate-shake">
                {emailError}
              </div>
            )}
            
            {emailSuccess && (
              <div className="bg-green-500/20 border border-green-500/50 text-white p-3 rounded-lg mb-4 animate-fade-in-up">
                {emailSuccess}
              </div>
            )}
            
            <form onSubmit={handleEmailChange} className="space-y-4">
              <div>
                <label htmlFor="newEmail" className="block text-sm font-medium mb-1">
                  New Email Address
                </label>
                <input
                  id="newEmail"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="emailCurrentPassword" className="block text-sm font-medium mb-1">
                  Current Password
                </label>
                <input
                  id="emailCurrentPassword"
                  type="password"
                  value={emailCurrentPassword}
                  onChange={(e) => setEmailCurrentPassword(e.target.value)}
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-white/60">
                  For security, please enter your current password to change your email
                </p>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isEmailSubmitting}
                  className="btn-gradient flex items-center space-x-2"
                >
                  {isEmailSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                      <span>Updating...</span>
                    </>
                  ) : (
                    <span>Update Email</span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Customization Section - Profile Background */}
          <div className="cosmic-card mb-8 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
            <h2 className="text-xl font-space font-bold mb-4 text-space-cyan">
              Profile Background
            </h2>
            
            {backgroundError && (
              <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-4 animate-shake">
                {backgroundError}
              </div>
            )}
            
            {backgroundSuccess && (
              <div className="bg-green-500/20 border border-green-500/50 text-white p-3 rounded-lg mb-4 animate-fade-in-up">
                {backgroundSuccess}
              </div>
            )}
            
            <div className="mb-4">
              <p className="text-sm text-white/70 mb-2">
                Select a background to use on your profile. You can acquire more backgrounds from the marketplace.
              </p>
              
              {/* Background grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                {/* Default background */}
                <div 
                  className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                    activeBackground === 'default' || !activeBackground ? 'border-space-gold' : 'border-transparent hover:border-white/30'
                  }`}
                  onClick={() => setActiveBackground('default')}
                >
                  <div className="aspect-video bg-gradient-to-br from-space-indigo to-space-purple relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Default</div>
                  </div>
                </div>
                
                {/* Owned backgrounds */}
                {profile?.backgrounds?.map((bgId: string) => {
                  const effect = bgId.replace('background-', '');
                  const name = backgroundPreviews[effect] || effect;
                  
                  return (
                    <div 
                      key={bgId}
                      className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                        activeBackground === bgId ? 'border-space-gold' : 'border-transparent hover:border-white/30'
                      }`}
                      onClick={() => setActiveBackground(bgId)}
                    >
                      <div className={`
                        aspect-video relative overflow-hidden
                        ${effect === 'nebula' ? 'bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900' : ''}
                        ${effect === 'aurora' ? 'bg-gradient-to-r from-green-400 to-blue-500 animate-pulse-slow' : ''}
                        ${effect === 'space' ? 'bg-black cosmic-stars' : ''}
                        ${effect === 'galaxy' ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-size-200 animate-gradient-x' : ''}
                        ${effect === 'cosmic-stars' ? 'bg-space-dark' : ''}
                        ${effect === 'aurora-waves' ? 'bg-indigo-900' : ''}
                        ${effect === 'plasma-field' ? 'bg-space-dark' : ''}
                        ${effect === 'neon-grid' ? 'bg-black' : ''}
                        ${effect === 'galaxy-swirl' ? 'bg-space-dark' : ''}
                      `}>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">{name}</div>
                        
                        {effect === 'cosmic-stars' && (
                          <div className="absolute inset-0 pointer-events-none cosmic-stars-bg"></div>
                        )}
                        
                        {effect === 'aurora-waves' && (
                          <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute w-[200%] h-[5px] top-[20%] bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 animate-aurora-shift"></div>
                            <div className="absolute w-[200%] h-[5px] top-[50%] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 animate-aurora-shift-delay"></div>
                            <div className="absolute w-[200%] h-[5px] top-[80%] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 animate-aurora-shift-delay-2"></div>
                          </div>
                        )}
                        
                        {effect === 'neon-grid' && (
                          <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div 
                                key={`h${i}`}
                                className="absolute h-[1px] w-full bg-space-indigo shadow-glow animate-neon-pulse"
                                style={{
                                  top: `${i * 50}%`,
                                  animationDelay: `${i * 0.2}s`,
                                }}
                              />
                            ))}
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div 
                                key={`v${i}`}
                                className="absolute w-[1px] h-full bg-space-indigo shadow-glow animate-neon-pulse"
                                style={{
                                  left: `${i * 50}%`,
                                  animationDelay: `${i * 0.2 + 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {/* Link to marketplace if no backgrounds or to show more */}
                <div 
                  className="relative overflow-hidden rounded-lg cursor-pointer border-2 border-dashed border-white/30 hover:border-white/50 transition-all"
                  onClick={() => router.push('/marketplace?category=background')}
                >
                  <div className="aspect-video flex items-center justify-center text-white text-xs">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Get More
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={async () => {
                  try {
                    setApplyingBackground(true);
                    setBackgroundError('');
                    setBackgroundSuccess('');
                    
                    await updateProfileData({
                      activeBackground: activeBackground || 'default'
                    });
                    
                    setBackgroundSuccess('Background updated successfully!');
                    
                    // Clear success message after 3 seconds
                    setTimeout(() => {
                      setBackgroundSuccess('');
                    }, 3000);
                  } catch (error) {
                    console.error('Error updating background:', error);
                    setBackgroundError('Failed to update background. Please try again.');
                  } finally {
                    setApplyingBackground(false);
                  }
                }}
                disabled={applyingBackground}
                className="btn-gradient flex items-center space-x-2"
              >
                {applyingBackground ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                    <span>Applying...</span>
                  </>
                ) : (
                  <span>Apply Background</span>
                )}
              </button>
            </div>
          </div>
          
          {/* Change Username Section */}
          <div className="cosmic-card animate-fade-in-up" style={{ animationDelay: '350ms' }}>
            <h2 className="text-xl font-space font-bold mb-4 text-space-cyan">
              Change Username
            </h2>
            
            {usernameError && (
              <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-4 animate-shake">
                {usernameError}
              </div>
            )}
            
            {usernameSuccess && (
              <div className="bg-green-500/20 border border-green-500/50 text-white p-3 rounded-lg mb-4 animate-fade-in-up">
                {usernameSuccess}
              </div>
            )}
            
            <form onSubmit={handleUsernameChange} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-1">
                  New Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="cosmic-input w-full focus:cosmic-glow-input"
                  placeholder="your_username"
                />
                <p className="mt-1 text-xs text-white/60">
                  Can only contain letters, numbers, and underscores
                </p>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isUsernameSubmitting}
                  className="btn-gradient flex items-center space-x-2"
                >
                  {isUsernameSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                      <span>Updating...</span>
                    </>
                  ) : (
                    <span>Update Username</span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Account Info */}
          <div className="mt-8 text-white/70 text-sm text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <p>Account created: {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'Unknown'}</p>
            <p>Last updated: {profile?.lastUpdated ? new Date(profile.lastUpdated).toLocaleDateString() : 'Unknown'}</p>
          </div>
        </div>
      </div>
    </main>
  );
} 