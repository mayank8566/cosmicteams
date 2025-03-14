'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  User,
  UserCredential,
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { auth, googleProvider, db } from './firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, username?: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential | void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Check for redirect result on component mount (for Google Auth redirect)
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          // User signed in via redirect
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect sign-in error:", error);
      });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, username?: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Set display name if username provided
    if (username && user) {
      await updateProfile(user, {
        displayName: username
      });
      
      // Create user profile document in Firestore
      await setDoc(doc(db, 'userProfiles', user.uid), {
        email: user.email,
        username: username,
        displayName: username,
        createdAt: serverTimestamp(),
        hasSetUsername: true
      });
    }
    
    return userCredential;
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    try {
      // Try using popup first (preferred for better UX)
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      const result = await signInWithPopup(auth, googleProvider, browserPopupRedirectResolver);
      
      // Create/update user profile in Firestore for Google Auth users
      const user = result.user;
      if (user) {
        // Check if the user profile exists
        await setDoc(doc(db, 'userProfiles', user.uid), {
          email: user.email,
          displayName: user.displayName || user.email?.split('@')[0] || 'User',
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          hasSetUsername: false // Default to false for Google Auth users
        }, { merge: true });
      }
      
      return result;
    } catch (error: any) {
      // If popup fails or is blocked, fall back to redirect
      if (error.code === 'auth/popup-blocked' || 
          error.code === 'auth/popup-closed-by-user' ||
          error.code === 'auth/cancelled-popup-request') {
        console.log("Popup was blocked or closed, falling back to redirect method");
        await signInWithRedirect(auth, googleProvider);
        // Redirect will happen here, no need to return anything
        return;
      }
      // Re-throw other errors
      throw error;
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 