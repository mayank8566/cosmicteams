'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/lib/AuthContext';
import HeaderWrapper from '@/components/HeaderWrapper';
import OptimizedImage from '@/components/OptimizedImage';

interface UserData {
  uid: string;
  email: string;
  displayName: string;
  username?: string;
  photoURL?: string;
  cosmicTokens: number;
}

export default function TokenManagementPage() {
  const router = useRouter();
  const { user } = useAuth();
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [tokenAmount, setTokenAmount] = useState('');
  const [transactionType, setTransactionType] = useState<'add' | 'remove'>('add');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Array<{
    userId: string;
    username: string;
    amount: number;
    type: 'add' | 'remove';
    timestamp: number;
  }>>([]);

  // Check if current user is an admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.email as string));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.role === 'admin') {
            setIsAdmin(true);
            // Load recent transactions if any
            const transactionsRef = collection(db, 'tokenTransactions');
            const q = query(transactionsRef, where('adminId', '==', user.email));
            const transactionsSnapshot = await getDocs(q);
            
            const transactions: any[] = [];
            transactionsSnapshot.forEach(doc => {
              transactions.push(doc.data());
            });
            
            // Sort by timestamp, most recent first
            transactions.sort((a, b) => b.timestamp - a.timestamp);
            setRecentTransactions(transactions.slice(0, 10)); // Keep only last 10
          } else {
            router.push('/dashboard');
          }
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [user, router]);

  // Handle user search
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setSearchResults([]);
    setSelectedUser(null);
    try {
      const usersRef = collection(db, 'users');
      let foundUsers: UserData[] = [];
      
      // If search term contains @ symbol, search by email
      if (searchTerm.includes('@')) {
        const userDoc = await getDoc(doc(db, 'users', searchTerm));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          foundUsers.push({
            uid: userDoc.id,
            email: userDoc.id,
            displayName: userData.displayName || 'Unknown',
            username: userData.username,
            photoURL: userData.photoURL,
            cosmicTokens: userData.cosmicTokens || 0
          });
        }
      } else {
        // Search by username (case-insensitive)
        const snapshot = await getDocs(usersRef);
        snapshot.forEach(doc => {
          const userData = doc.data();
          if (
            userData.username && 
            userData.username.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            foundUsers.push({
              uid: doc.id,
              email: doc.id,
              displayName: userData.displayName || 'Unknown',
              username: userData.username,
              photoURL: userData.photoURL,
              cosmicTokens: userData.cosmicTokens || 0
            });
          }
        });
      }
      
      setSearchResults(foundUsers);
    } catch (error) {
      console.error('Error searching users:', error);
      setMessage({
        text: 'Error searching for users. Please try again.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user selection
  const selectUser = (user: UserData) => {
    setSelectedUser(user);
    setTokenAmount('');
    setMessage(null);
  };

  // Handle token transaction
  const handleTokenTransaction = async () => {
    if (!selectedUser || !tokenAmount || isNaN(Number(tokenAmount))) {
      setMessage({
        text: 'Please enter a valid token amount',
        type: 'error'
      });
      return;
    }

    const amount = Number(tokenAmount);
    if (amount <= 0) {
      setMessage({
        text: 'Token amount must be greater than 0',
        type: 'error'
      });
      return;
    }

    setIsLoading(true);
    try {
      const userRef = doc(db, 'users', selectedUser.email);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        throw new Error('User not found');
      }
      
      const userData = userDoc.data();
      const currentTokens = userData.cosmicTokens || 0;
      let newTokens: number;
      
      if (transactionType === 'add') {
        newTokens = currentTokens + amount;
      } else {
        // Remove tokens
        if (currentTokens < amount) {
          setMessage({
            text: `User only has ${currentTokens} tokens. Cannot remove ${amount} tokens.`,
            type: 'error'
          });
          setIsLoading(false);
          return;
        }
        newTokens = currentTokens - amount;
      }
      
      // Update user document
      await updateDoc(userRef, {
        cosmicTokens: newTokens,
        lastUpdated: Date.now()
      });
      
      // Record the transaction
      const transactionRef = collection(db, 'tokenTransactions');
      const transactionData = {
        userId: selectedUser.email,
        username: selectedUser.username || selectedUser.displayName,
        adminId: user?.email,
        amount: amount,
        type: transactionType,
        timestamp: Date.now(),
        previousBalance: currentTokens,
        newBalance: newTokens
      };
      
      await updateDoc(doc(transactionRef), transactionData);
      
      // Update local state
      setSelectedUser({
        ...selectedUser,
        cosmicTokens: newTokens
      });
      
      // Add to recent transactions
      const newTransaction = {
        userId: selectedUser.email,
        username: selectedUser.username || selectedUser.displayName,
        amount: amount,
        type: transactionType,
        timestamp: Date.now()
      };
      
      setRecentTransactions([newTransaction, ...recentTransactions.slice(0, 9)]);
      
      setMessage({
        text: `Successfully ${transactionType === 'add' ? 'added' : 'removed'} ${amount} tokens ${transactionType === 'add' ? 'to' : 'from'} ${selectedUser.username || selectedUser.email}`,
        type: 'success'
      });
      
      // Reset form
      setTokenAmount('');
    } catch (error) {
      console.error('Error processing token transaction:', error);
      setMessage({
        text: 'Error processing token transaction. Please try again.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !isAdmin) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 py-16 px-6 flex items-center justify-center">
          <div className="cosmic-card p-8">
            <div className="animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full mx-auto"></div>
            <p className="text-center mt-4">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="flex-1 py-8 px-6 max-w-6xl mx-auto w-full">
        <div className="cosmic-card p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">Admin Token Management</h1>
          <p className="mb-6 text-gray-300">Grant or remove Cosmic Tokens from users by email or username</p>
          
          {/* Search form */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search by email or username" 
              className="flex-1 bg-space-darker border border-space-indigo rounded-md px-4 py-2 text-white"
            />
            <button 
              onClick={handleSearch}
              disabled={isLoading || !searchTerm.trim()}
              className="btn-primary"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
          
          {/* Search results */}
          {searchResults.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <div className="space-y-4">
                {searchResults.map(user => (
                  <div 
                    key={user.email} 
                    className={`border p-4 rounded-md cursor-pointer transition-colors ${selectedUser?.email === user.email ? 'border-space-gold bg-space-gold/10' : 'border-space-indigo hover:border-space-cyan'}`}
                    onClick={() => selectUser(user)}
                  >
                    <div className="flex items-center gap-4">
                      {user.photoURL ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <OptimizedImage 
                            src={user.photoURL} 
                            alt={user.displayName}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-space-indigo flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{(user.displayName?.[0] || user.email[0]).toUpperCase()}</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold">{user.displayName}</h3>
                        <p className="text-sm text-gray-300">{user.username ? `@${user.username}` : ''}</p>
                        <p className="text-sm text-gray-300">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{user.cosmicTokens} Tokens</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Selected user form */}
          {selectedUser && (
            <div className="cosmic-card bg-space-darker p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Modify Tokens for {selectedUser.username || selectedUser.email}</h2>
              <p className="mb-4">Current balance: <span className="font-semibold">{selectedUser.cosmicTokens} Tokens</span></p>
              
              {message && (
                <div className={`mb-4 p-3 rounded-md ${message.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {message.text}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2" htmlFor="token-amount">Token Amount</label>
                  <input 
                    id="token-amount"
                    type="number" 
                    min="1"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(e.target.value)}
                    placeholder="Enter amount" 
                    className="w-full bg-space-dark border border-space-indigo rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Transaction Type</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="add"
                        checked={transactionType === 'add'}
                        onChange={() => setTransactionType('add')}
                        className="form-radio text-space-gold focus:ring-space-gold h-5 w-5"
                      />
                      <span>Add Tokens</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="remove"
                        checked={transactionType === 'remove'}
                        onChange={() => setTransactionType('remove')}
                        className="form-radio text-red-500 focus:ring-red-500 h-5 w-5"
                      />
                      <span>Remove Tokens</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleTokenTransaction}
                disabled={isLoading || !tokenAmount || isNaN(Number(tokenAmount)) || Number(tokenAmount) <= 0}
                className={`px-6 py-2 rounded-md font-medium ${transactionType === 'add' ? 'bg-space-gold text-black hover:bg-space-gold/90' : 'bg-red-600 text-white hover:bg-red-700'}`}
              >
                {isLoading ? 'Processing...' : transactionType === 'add' ? 'Add Tokens' : 'Remove Tokens'}
              </button>
            </div>
          )}
          
          {/* Recent transactions */}
          {recentTransactions.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-space-indigo">
                      <th className="px-4 py-2 text-left">User</th>
                      <th className="px-4 py-2 text-left">Action</th>
                      <th className="px-4 py-2 text-right">Amount</th>
                      <th className="px-4 py-2 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction, index) => (
                      <tr key={index} className="border-b border-space-indigo/30">
                        <td className="px-4 py-3">{transaction.username}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${transaction.type === 'add' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                            {transaction.type === 'add' ? 'Added' : 'Removed'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">{transaction.amount} Tokens</td>
                        <td className="px-4 py-3 text-right">{new Date(transaction.timestamp).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
