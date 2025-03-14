'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  getDocs, 
  query, 
  where, 
  Firestore, 
  DocumentData,
  DocumentReference
} from 'firebase/firestore';
import { 
  updateProfile, 
  updatePassword, 
  updateEmail, 
  EmailAuthProvider, 
  reauthenticateWithCredential,
  User
} from 'firebase/auth';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  StorageReference 
} from 'firebase/storage';
import { db, storage } from './firebase';
import { useAuth } from './AuthContext';

// Game mode types
export type GameMode = 'neth-op' | 'axe' | 'smp' | 'cpvp' | 'sword' | 'uhc';

// Tier format: "LT1", "HT5", etc.
export type TierValue = `${'LT' | 'HT'}${1 | 2 | 3 | 4 | 5}`;

export interface GameTier {
  mode: GameMode;
  tier: TierValue;
}

export interface ProfileData {
  displayName?: string;
  photoURL?: string;
  bio?: string;
  email?: string;
  username?: string;
  profileMusic?: string | null;
  musicType?: string | null;
  gameTiers?: { [key in GameMode]?: TierValue };
  canCreateTeams?: boolean;
  lastUpdated?: number;
  createdAt?: number;
  cosmicTokens?: number;
  spinnerUsed?: number;
  lastSpinTime?: number;
  avatarDecorations?: string[];
  activeAvatarDecoration?: string;
  spinHistory?: {time: number, prize: any, type?: string}[];
  brokeCrateUsed?: number;
  lastBrokeCrateTime?: number;
  legendCrateUsed?: number;
  lastLegendCrateTime?: number;
  avatars?: string[];
  teamBanners?: string[];
  profileDecorations?: string[];
  purchasedItems?: string[];
  activeProfileBackground?: string;
}

interface ProfileContextType {
  profile: ProfileData | null;
  loading: boolean;
  updating: boolean;
  error: string | null;
  updateProfileData: (data: Partial<ProfileData>) => Promise<void>;
  uploadProfileImage: (file: File) => Promise<string>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  changeEmail: (currentPassword: string, newEmail: string) => Promise<void>;
  updateAllGameTiers: (tiers: { [key in GameMode]?: TierValue }) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch user profile data when user changes
  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Initialize with data from auth
        const initialProfile: ProfileData = {
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
          email: user.email || '',
          username: user.email ? user.email.split('@')[0] : '',  // Default username from email
          profileMusic: null,
          musicType: null,
          gameTiers: {
            'neth-op': 'LT1',
            'axe': 'LT1',
            'smp': 'LT1',
            'cpvp': 'LT1',
            'sword': 'LT1',
            'uhc': 'LT1'
          },
          canCreateTeams: true,
          lastUpdated: Date.now(),
          createdAt: Date.now(),
          cosmicTokens: 100, // Start with 100 tokens
          spinnerUsed: 0,    // Track spinner usage
          lastSpinTime: 0    // Track last spin time
        };

        // Try to get additional data from Firestore
        if (user.uid && db) {
          const docRef = doc(db, 'userProfiles', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Merge Firestore data with auth data
            setProfile({ ...initialProfile, ...docSnap.data() as Partial<ProfileData> });
          } else {
            // If no Firestore document exists, create one with initial data
            await setDoc(docRef, {
              ...initialProfile,
              createdAt: Date.now(),
              lastUpdated: Date.now(),
            });
            setProfile(initialProfile);
          }
        } else {
          setProfile(initialProfile);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load profile data');
        // Still set basic profile from auth
        if (user) {
          setProfile({
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
            email: user.email || '',
            username: user.email ? user.email.split('@')[0] : '',  // Default username from email
            profileMusic: null,
            musicType: null,
          });
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [user, db]);

  // Update profile data in both Firebase Auth and Firestore
  const updateProfileData = async (data: Partial<ProfileData>) => {
    if (!user) return;
    
    setUpdating(true);
    setError(null);

    try {
      // Update auth profile if name or photo has changed
      if (data.displayName || data.photoURL) {
        const updateData: { displayName?: string; photoURL?: string } = {};
        if (data.displayName) updateData.displayName = data.displayName;
        if (data.photoURL) updateData.photoURL = data.photoURL;
        
        await updateProfile(user, updateData);
      }

      // Validate token amount if it's being updated to prevent negative values
      if (data.cosmicTokens !== undefined) {
        if (data.cosmicTokens < 0) {
          throw new Error('Token amount cannot be negative');
        }
        // Make sure we're storing tokens as a number
        data.cosmicTokens = Number(data.cosmicTokens);
      }

      // Update Firestore document
      if (user.uid && db) {
        const docRef = doc(db, 'userProfiles', user.uid);
        
        // Create a new object with the updates
        const updateObject = {
          ...data,
          lastUpdated: Date.now()
        };
        
        await updateDoc(docRef, updateObject);
        
        // Get the updated document to confirm changes
        const updatedDoc = await getDoc(docRef);
        const updatedData = updatedDoc.data() as ProfileData;
        
        // Update local state with the confirmed data from the database
        setProfile(prev => prev ? { ...prev, ...updatedData } : null);
      } else {
        // Just update local state if Firestore isn't available
        setProfile(prev => prev ? { ...prev, ...data } : null);
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  // Upload profile image to Firebase Storage
  const uploadProfileImage = async (file: File): Promise<string> => {
    if (!user) throw new Error('User not authenticated');
    
    setUpdating(true);
    setError(null);

    try {
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        throw new Error('Image file is too large. Please select a file under 2MB.');
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please select a valid image file (JPG, PNG, etc.)');
      }
      
      // Create a reference to the file location
      const storageRef = ref(storage, `profile-images/${user.uid}/${Date.now()}-${file.name}`);
      
      // Delete previous profile image if exists and is a Storage URL
      if (profile?.photoURL && profile.photoURL.includes('firebasestorage.googleapis.com')) {
        try {
          const oldImageRef = ref(storage, profile.photoURL);
          await deleteObject(oldImageRef);
        } catch (err) {
          // Ignore errors when trying to delete old images
          console.log('Previous image not found or already deleted');
        }
      }
      
      // Upload the file
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      // Update profile with new image URL
      await updateProfileData({ photoURL: downloadURL });
      
      return downloadURL;
    } catch (err) {
      console.error('Error uploading profile image:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload profile image');
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  // Update a single game tier
  const updateGameTier = async (mode: GameMode, tier: TierValue) => {
    if (!user) return;
    
    setUpdating(true);
    setError(null);

    try {
      // Copy current tiers or create new object if none exists
      const currentTiers = profile?.gameTiers || {} as Record<GameMode, TierValue>;
      
      // Update the specific game mode tier
      const updatedTiers = {
        ...currentTiers,
        [mode]: tier
      };
      
      // Update in Firestore
      if (user.uid) {
        await updateProfileData({ gameTiers: updatedTiers });
      }
    } catch (err) {
      console.error('Error updating game tier:', err);
      setError('Failed to update game tier');
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  // Update all game tiers at once
  const updateAllGameTiers = async (tiers: { [key in GameMode]?: TierValue }) => {
    if (!user) return;
    
    setUpdating(true);
    setError(null);

    try {
      // Update in Firestore
      if (user.uid) {
        await updateProfileData({ gameTiers: tiers });
      }
    } catch (err) {
      console.error('Error updating game tiers:', err);
      setError('Failed to update game tiers');
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  // Change user password
  const changePassword = async (currentPassword: string, newPassword: string) => {
    if (!user || !user.email) {
      throw new Error('User not authenticated or email not available');
    }
    
    setUpdating(true);
    setError(null);

    try {
      // Reauthenticate user first
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      
      // Change password
      await updatePassword(user, newPassword);
    } catch (err: any) {
      console.error('Error changing password:', err);
      if (err.code === 'auth/wrong-password') {
        setError('Current password is incorrect');
      } else {
        setError('Failed to change password');
      }
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  // Change user email
  const changeEmail = async (currentPassword: string, newEmail: string) => {
    if (!user || !user.email) {
      throw new Error('User not authenticated or email not available');
    }
    
    setUpdating(true);
    setError(null);

    try {
      // Reauthenticate user first
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      
      // Change email
      await updateEmail(user, newEmail);
      
      // Update profile data
      await updateProfileData({ email: newEmail });
    } catch (err: any) {
      console.error('Error changing email:', err);
      if (err.code === 'auth/wrong-password') {
        setError('Current password is incorrect');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use by another account');
      } else {
        setError('Failed to change email');
      }
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  const value = {
    profile,
    loading,
    updating,
    error,
    updateProfileData,
    uploadProfileImage,
    changePassword,
    changeEmail,
    updateAllGameTiers
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
} 