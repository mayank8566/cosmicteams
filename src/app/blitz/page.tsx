'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { refreshQuery, wait } from '@/lib/firebaseUtils';
import { db } from '@/lib/firebase';
import HeaderWrapper from '@/components/HeaderWrapper';
import Image from 'next/image';
import Link from 'next/link';

interface TeamData {
  id: string;
  name: string;
  description: string;
  members: string[];
  createdBy: string;
  points: number;
  logo: string;
  createdAt: any;
}

export default function BlitzPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const fetchTeams = async () => {
      // Add a refresh token to force a fresh query execution
      const refreshToken = refreshQuery();
      
      // Wait a moment to ensure Firebase has time to recognize the index
      await wait(500);
      try {
        setLoading(true);
        setError(null);
        
        // Query teams where the current user is a member
        // Note: This query requires a composite index in Firebase
        // Using the index you created with: check Ascending, check2 Ascending, __name__ Ascending
        const teamsQuery = query(
          collection(db, 'teams'),
          where('check', '==', true),
          where('check2', '==', true)
        );
        
        const teamsSnapshot = await getDocs(teamsQuery);
        const teamsData: TeamData[] = [];
        
        teamsSnapshot.forEach((doc: any) => {
          const data = doc.data() as Omit<TeamData, 'id'>;
          teamsData.push({
            id: doc.id,
            name: data.name || 'Unnamed Team',
            description: data.description || '',
            members: data.members || [],
            createdBy: data.createdBy || '',
            points: data.points || 0, // Default to 0 if points don't exist
            logo: data.logo || '/default-team-logo.png', // Default logo if none exists
            createdAt: data.createdAt,
          });
        });
        
        setTeams(teamsData);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError('Failed to load teams. Please try again later.');
        // Continue with empty teams array rather than failing completely
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    // Wrap in setTimeout to avoid potential Next.js hydration issues
    setTimeout(() => {
      fetchTeams().catch(error => {
        console.error('Failed to fetch teams:', error);
        setLoading(false);
        setError('Network error occurred. Please check your connection and try again.');
        setTeams([]);
      });
    }, 0);
  }, [user, router]);

  // Generate a placeholder logo with team initials if no logo exists
  const getInitialsLogo = (teamName: string) => {
    const words = teamName.split(' ');
    let initials = '';
    
    if (words.length === 1) {
      initials = words[0].substring(0, 2).toUpperCase();
    } else {
      initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
    }
    
    return initials;
  };

  // Get a formatted list of team members (limit to 3 with a "+X more" indicator)
  const getFormattedMembers = (members: string[]) => {
    if (members.length <= 3) {
      return members;
    }
    return [...members.slice(0, 3), `+${members.length - 3} more`];
  };

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="container mx-auto px-4 py-8 flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 p-6 bg-slate-800/80 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Blitz Teams
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push('/create-team')}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                Create New Team
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Dashboard
              </button>
            </div>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="p-6 bg-red-900/50 text-red-200 rounded-lg border border-red-700 mb-6">
              {error}
            </div>
          )}

          {!loading && teams.length === 0 && !error && (
            <div className="text-center py-16 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-4xl mb-4">🛸</div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                No Teams Found
              </h2>
              <p className="text-white/70 max-w-md mx-auto mb-8">
                You haven't created or joined any teams yet. Start your cosmic journey by creating your first team!
              </p>
              <button
                onClick={() => router.push('/create-team')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                Create Your First Team
              </button>
            </div>
          )}

          {!loading && teams.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <Link 
                  href={`/teams/${team.id}`} 
                  key={team.id}
                  className="group"
                >
                  <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all transform hover:scale-[1.02] border border-transparent hover:border-blue-500/30">
                    <div className="flex items-center mb-4">
                      {team.logo && team.logo !== '/default-team-logo.png' ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500/50">
                          <Image 
                            src={team.logo} 
                            alt={team.name} 
                            width={64} 
                            height={64}
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full mr-4 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white font-bold text-xl">
                          {getInitialsLogo(team.name)}
                        </div>
                      )}
                      <div>
                        <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                          {team.name}
                        </h2>
                        <p className="text-white/60 text-sm">
                          Created by: {team.createdBy}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <span className="text-xs font-medium uppercase tracking-wider text-purple-400 mr-2">Team Points</span>
                        <span className="px-2 py-1 bg-purple-900/50 rounded-md text-white font-bold">
                          {team.points.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="text-sm text-white/60">
                        {team.members.length} {team.members.length === 1 ? 'member' : 'members'}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2">
                        Team Members
                      </h3>
                      <div className="space-y-2">
                        {getFormattedMembers(team.members).map((member, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-2 text-xs">
                              {member.charAt(0).toUpperCase()}
                            </div>
                            <span className={member.startsWith('+') ? 'text-white/50 italic' : 'text-white/80'}>
                              {member}
                            </span>
                            {member === team.createdBy && (
                              <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-900/50 text-blue-300 rounded">
                                Leader
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
