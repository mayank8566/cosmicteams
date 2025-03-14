'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import HeaderWrapper from '@/components/HeaderWrapper';
import { collection, query, getDocs, doc, updateDoc, getDoc, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface UserData {
  id: string;
  email: string;
  displayName?: string;
  username?: string;
  cosmicTokens?: number;
  photoURL?: string;
}

export default function AdminTokensPage() {
  const router = useRouter();
  const { user } = useAuth();
  
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Grant tokens state
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [tokensToGrant, setTokensToGrant] = useState(100);
  const [grantingTokens, setGrantingTokens] = useState(false);
  const [grantMessage, setGrantMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const checkAdminStatus = async () => {
      try {
        if (!user.email) return;
        
        const userDoc = doc(db, 'users', user.email);
        const userSnapshot = await getDoc(userDoc);
        
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          if (userData.isAdmin) {
            setIsAdmin(true);
            fetchUsers();
          } else {
            setError('Access denied. Admin privileges required.');
            setLoading(false);
          }
        } else {
          setError('User data not found.');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error checking admin status:', err);
        setError('Failed to verify admin status.');
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user, router]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const usersRef = collection(db, 'users');
      const usersSnapshot = await getDocs(usersRef);
      
      const usersData: UserData[] = [];
      usersSnapshot.forEach(doc => {
        const data = doc.data();
        usersData.push({
          id: doc.id,
          email: doc.id,
          displayName: data.displayName,
          username: data.username,
          cosmicTokens: data.cosmicTokens || 0,
          photoURL: data.photoURL
        });
      });
      
      setUsers(usersData);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchUser = async () => {
    if (!searchTerm.trim()) {
      fetchUsers();
      return;
    }
    
    try {
      setLoading(true);
      const usersRef = collection(db, 'users');
      
      // Create a query that checks for username or email matches
      const emailQuery = query(usersRef, where('email', '>=', searchTerm), where('email', '<=', searchTerm + '\uf8ff'));
      const usernameQuery = query(usersRef, where('username', '>=', searchTerm), where('username', '<=', searchTerm + '\uf8ff'));
      
      const [emailSnapshot, usernameSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(usernameQuery)
      ]);
      
      const usersData: UserData[] = [];
      const userIds = new Set();
      
      // Add users from email matches
      emailSnapshot.forEach(doc => {
        if (!userIds.has(doc.id)) {
          const data = doc.data();
          usersData.push({
            id: doc.id,
            email: doc.id,
            displayName: data.displayName,
            username: data.username,
            cosmicTokens: data.cosmicTokens || 0,
            photoURL: data.photoURL
          });
          userIds.add(doc.id);
        }
      });
      
      // Add users from username matches
      usernameSnapshot.forEach(doc => {
        if (!userIds.has(doc.id)) {
          const data = doc.data();
          usersData.push({
            id: doc.id,
            email: doc.id,
            displayName: data.displayName,
            username: data.username,
            cosmicTokens: data.cosmicTokens || 0,
            photoURL: data.photoURL
          });
          userIds.add(doc.id);
        }
      });
      
      setUsers(usersData);
    } catch (err) {
      console.error('Error searching users:', err);
      setError('Failed to search users.');
    } finally {
      setLoading(false);
    }
  };

  const grantTokens = async () => {
    if (!selectedUser || tokensToGrant <= 0 || grantingTokens) return;
    
    try {
      setGrantingTokens(true);
      setGrantMessage(null);
      
      const userDoc = doc(db, 'users', selectedUser.id);
      const userSnapshot = await getDoc(userDoc);
      
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const currentTokens = userData.cosmicTokens || 0;
        const newTokens = currentTokens + tokensToGrant;
        
        await updateDoc(userDoc, {
          cosmicTokens: newTokens
        });
        
        // Update the user in the local state
        setUsers(prevUsers => {
          return prevUsers.map(u => {
            if (u.id === selectedUser.id) {
              return { ...u, cosmicTokens: newTokens };
            }
            return u;
          });
        });
        
        if (selectedUser === selectedUser) {
          setSelectedUser({ ...selectedUser, cosmicTokens: newTokens });
        }
        
        setGrantMessage({ 
          type: 'success', 
          text: `Successfully granted ${tokensToGrant} Cosmic Tokens to ${selectedUser.username || selectedUser.email}!` 
        });
      } else {
        setGrantMessage({ type: 'error', text: 'User not found in database.' });
      }
    } catch (err) {
      console.error('Error granting tokens:', err);
      setGrantMessage({ type: 'error', text: 'Failed to grant tokens. Please try again.' });
    } finally {
      setGrantingTokens(false);
    }
  };

  if (loading && !isAdmin) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full"></div>
        </div>
      </main>
    );
  }

  if (error || !isAdmin) {
    return (
      <main className="min-h-screen flex flex-col">
        <HeaderWrapper />
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="cosmic-card p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h2>
            <p className="mb-6">{error || 'You do not have permission to access this page.'}</p>
            <button 
              onClick={() => router.push('/dashboard')} 
              className="btn-gradient"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="flex-1 px-6 py-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold font-space mb-2 animate-fade-in-up">
            <span className="gradient-text cosmic-gradient">Admin: Cosmic Tokens</span>
          </h1>
          <p className="text-cosmic-text-secondary mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Grant Cosmic Tokens to users from this admin panel
          </p>
          
          {/* Search Form */}
          <div className="cosmic-card border border-space-indigo/30 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by username or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full cosmic-input"
                />
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleSearchUser}
                  className="btn-gradient-secondary"
                >
                  Search
                </button>
                <button 
                  onClick={fetchUsers}
                  className="btn-outline"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          
          {/* Grant Tokens UI */}
          {selectedUser && (
            <div className="cosmic-card border border-space-purple/30 p-6 mb-8">
              <h2 className="text-2xl font-bold text-space-cyan mb-4">Grant Tokens</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-space-dark">
                  <img
                    src={selectedUser.photoURL || '/default-avatar.png'}
                    alt={selectedUser.displayName || 'User'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {selectedUser.displayName || 'User'}
                  </div>
                  <div className="text-sm text-cosmic-text-secondary">
                    {selectedUser.username ? `@${selectedUser.username}` : selectedUser.email}
                  </div>
                  <div className="text-space-gold font-medium">
                    Current Balance: {selectedUser.cosmicTokens || 0} Tokens
                  </div>
                </div>
              </div>
              
              {grantMessage && (
                <div className={`mb-4 p-3 rounded-lg ${grantMessage.type === 'success' ? 'bg-green-900/30 border border-green-500/50 text-green-300' : 'bg-red-900/30 border border-red-500/50 text-red-300'}`}>
                  {grantMessage.text}
                </div>
              )}
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <label className="block text-sm font-medium mb-2">Amount to Grant</label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={tokensToGrant}
                    onChange={(e) => setTokensToGrant(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full cosmic-input"
                  />
                </div>
                <div className="flex-1 flex items-end">
                  <button
                    onClick={grantTokens}
                    disabled={grantingTokens || tokensToGrant <= 0}
                    className="btn-gradient py-2 px-6 disabled:opacity-50"
                  >
                    {grantingTokens ? 'Processing...' : 'Grant Tokens'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedUser(null);
                      setGrantMessage(null);
                    }}
                    className="btn-outline py-2 px-6 ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Users List */}
          <div className="cosmic-card border border-space-cyan/30 p-6">
            <h2 className="text-2xl font-bold mb-6">Users</h2>
            
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-space-cyan border-t-transparent rounded-full"></div>
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-8 text-cosmic-text-secondary">
                No users found. {searchTerm && 'Try a different search term.'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-space-blue/30">
                      <th className="text-left py-3 px-4 font-medium">User</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Tokens</th>
                      <th className="text-right py-3 px-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id} className="border-b border-space-blue/20 hover:bg-space-blue/10">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-space-dark mr-3">
                              <img
                                src={user.photoURL || '/default-avatar.png'}
                                alt={user.displayName || 'User'}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{user.displayName || 'User'}</div>
                              {user.username && <div className="text-xs text-cosmic-text-secondary">@{user.username}</div>}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-cosmic-text-secondary">{user.email}</td>
                        <td className="py-3 px-4 text-space-gold font-medium">{user.cosmicTokens || 0}</td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => {
                              setSelectedUser(user);
                              setGrantMessage(null);
                            }}
                            className="btn-gradient-secondary text-sm py-1 px-3"
                          >
                            Grant Tokens
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
