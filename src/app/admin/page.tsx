'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useProfile } from '@/lib/ProfileContext';
import { 
  doc, 
  updateDoc, 
  increment, 
  arrayUnion, 
  collection, 
  query, 
  where, 
  getDocs 
} from '@firebase/firestore';
import { db } from '@/lib/firebase';

const ADMIN_CREDENTIALS = {
  email: 'admin@cosmicteams.com',
  password: 'admin123'
};

export default function AdminPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile } = useProfile();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // For token management
  const [tokenUserEmail, setTokenUserEmail] = useState('');
  const [tokenAmount, setTokenAmount] = useState<number>(100);
  const [isGrantingTokens, setIsGrantingTokens] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [tokenSuccess, setTokenSuccess] = useState<string | null>(null);

  // Check if admin is already authenticated using session storage
  useEffect(() => {
    const adminAuth = sessionStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (
      email === ADMIN_CREDENTIALS.email && 
      password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError(null);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleGrantAccess = async (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail) {
      setError('Please enter a user email');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Get the user's profile document
      const docRef = doc(db, 'userProfiles', userEmail);
      
      // Update the canCreateTeams field
      await updateDoc(docRef, {
        canCreateTeams: true,
        lastUpdated: Date.now()
      });

      setUserEmail('');
      alert('Access granted successfully!');
    } catch (err) {
      console.error('Error granting access:', err);
      setError('Failed to grant access. Please check the email and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGrantTokens = async (e: FormEvent) => {
    e.preventDefault();
    if (!tokenUserEmail) {
      setTokenError('Please enter a user email');
      return;
    }

    if (tokenAmount <= 0) {
      setTokenError('Token amount must be greater than 0');
      return;
    }

    setIsGrantingTokens(true);
    setTokenError(null);

    try {
      // First, query to find the user profile document by email
      const userProfilesCollection = collection(db, 'userProfiles');
      const userEmailQuery = query(
        userProfilesCollection,
        where('email', '==', tokenUserEmail)
      );
      
      const querySnapshot = await getDocs(userEmailQuery);
      
      if (querySnapshot.empty) {
        throw new Error('User not found with the provided email');
      }
      
      // Get the document ID (user's UID) from the query result
      const userDoc = querySnapshot.docs[0];
      const userUid = userDoc.id;
      
      // Now use the correct UID to update the tokens
      const docRef = doc(db, 'userProfiles', userUid);
      
      // Update the cosmicTokens field - increment by the specified amount
      await updateDoc(docRef, {
        cosmicTokens: increment(tokenAmount),
        lastUpdated: Date.now()
      });

      // Add to user's spin history
      await updateDoc(docRef, {
        spinHistory: arrayUnion({
          time: Date.now(),
          prize: { type: 'tokens', amount: tokenAmount },
          type: 'admin-grant'
        })
      });

      setTokenSuccess(`Successfully granted ${tokenAmount} tokens to ${tokenUserEmail}!`);
      setTimeout(() => setTokenSuccess(null), 5000);
      setTokenUserEmail('');
      setTokenAmount(100);
    } catch (err) {
      console.error('Error granting tokens:', err);
      if (err instanceof Error) {
        setTokenError(`Failed to grant tokens: ${err.message}`);
      } else {
        setTokenError('Failed to grant tokens. Please check the email and try again.');
      }
    } finally {
      setIsGrantingTokens(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm shadow-xl">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
                placeholder="admin@cosmicteams.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>Use the credentials provided by your administrator</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8 p-6 bg-slate-800/80 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                sessionStorage.removeItem('adminAuth');
                setIsAuthenticated(false);
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Logout
            </button>
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Home
            </button>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm shadow-xl">
          <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Grant Team Creation Access</h2>
          
          <form onSubmit={handleGrantAccess} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">User Email</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                placeholder="user@example.com"
                required
              />
            </div>

            {error && (
              <div className="p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isProcessing ? 'Processing...' : 'Grant Access'}
            </button>
          </form>
        </div>

        <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm shadow-xl mt-8">
          <h2 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Grant Cosmic Tokens</h2>
          
          <form onSubmit={handleGrantTokens} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">User Email</label>
              <input
                type="email"
                value={tokenUserEmail}
                onChange={(e) => setTokenUserEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                placeholder="user@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Token Amount</label>
              <input
                type="number"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(parseInt(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
              />
            </div>

            {tokenError && (
              <div className="p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700">
                {tokenError}
              </div>
            )}

            {tokenSuccess && (
              <div className="p-4 bg-green-900/50 text-green-200 rounded-lg border border-green-700">
                {tokenSuccess}
              </div>
            )}

            <button
              type="submit"
              disabled={isGrantingTokens}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isGrantingTokens ? 'Processing...' : 'Grant Tokens'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}