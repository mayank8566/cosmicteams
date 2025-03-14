'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { collection, query, where, getDocs, limit, orderBy, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { refreshQuery, wait } from '@/lib/firebaseUtils';
import Image from 'next/image';
import Link from 'next/link';
import { getUsernameByEmail } from '@/lib/userUtils';

interface TeamData {
  id: string;
  name: string;
  description?: string;
  members: string[];
  createdBy: string;
  createdByUsername?: string;
  createdAt: any;
  points: number;
  logo?: string;
}

export default function BlitzTeamsSection() {
  const { user } = useAuth();
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    const fetchTeams = async () => {
      // Add a refresh token to force a fresh query execution
      const refreshToken = refreshQuery();
      
      // Wait a moment to ensure Firebase has time to recognize the index
      await wait(500);
      
      // Function to get usernames for team leaders
      const getTeamLeaderUsernames = async (teams: TeamData[]): Promise<TeamData[]> => {
        const teamsWithUsernames = await Promise.all(teams.map(async (team) => {
          // Get the username for the team creator
          const username = await getUsernameByEmail(team.createdBy);
          return {
            ...team,
            createdByUsername: username || team.createdBy.split('@')[0] // Fallback to email username
          };
        }));
        
        return teamsWithUsernames;
      };

      try {
        console.log('Fetching teams...');
        // First, try to fetch teams with orderBy if the index is available
        try {
          const teamsOrderedQuery = query(
            collection(db, 'teams'),
            orderBy('points', 'desc'),
            limit(10) // Show top 10 teams on homepage
          );
          
          const orderedSnapshot = await getDocs(teamsOrderedQuery);
          console.log('Ordered query returned', orderedSnapshot.size, 'teams');
          
          if (!orderedSnapshot.empty) {
            const teamsData: TeamData[] = [];
            
            orderedSnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
              const data = doc.data();
              teamsData.push({
                id: doc.id,
                name: data.name || 'Unnamed Team',
                description: data.description || '',
                members: data.members || [],
                createdBy: data.createdBy || '',
                points: data.points || 0,
                logo: data.logo || '/default-team-logo.png',
                createdAt: data.createdAt,
              });
            });
            
            // Get usernames for team leaders
            const teamsWithUsernames = await getTeamLeaderUsernames(teamsData);
            setTeams(teamsWithUsernames);
            setLoading(false);
            return;
          }
        } catch (indexErr) {
          console.warn('Failed to use ordered query, falling back to basic query:', indexErr);
        }
        
        // If ordered query failed or returned no results, fallback to basic query
        // We need to handle the case when the index is not available
        const teamsQuery = query(
          collection(db, 'teams'),
          limit(15) // Get more teams since we'll sort client-side
        );
        
        const snapshot = await getDocs(teamsQuery);
        console.log('Basic query returned', snapshot.size, 'teams');
        const teamsData: TeamData[] = [];
        
        snapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
          const data = doc.data();
          teamsData.push({
            id: doc.id,
            name: data.name || 'Unnamed Team',
            description: data.description || '',
            members: data.members || [],
            createdBy: data.createdBy || '',
            points: data.points || 0,
            logo: data.logo || '/default-team-logo.png',
            createdAt: data.createdAt,
          });
        });
        
        // Sort teams by points client-side since we can't do it in the query without the index
        const sortedTeamsData = [...teamsData].sort((a, b) => b.points - a.points).slice(0, 10);
        
        // Get usernames for team leaders
        const teamsWithUsernames = await getTeamLeaderUsernames(sortedTeamsData);
        setTeams(teamsWithUsernames);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError('Failed to fetch teams. Please try again.');
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
        setError('Failed to fetch teams. Please try again.');
        setTeams([]);
      });
    }, 0);
  };

  useEffect(() => {
    handleRetry();
  }, [user]);

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-blue/60 to-space-dark/90"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text cosmic-gradient bg-gradient-shift">Cosmic Leaderboard</span>
          </h2>
          <p className="text-lg text-cosmic-text-secondary max-w-2xl mx-auto">
            The top performing teams across the galaxy, ranked by their stellar achievements.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-space-cyan border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="cosmic-card border border-cosmic-error/30 p-6 max-w-lg mx-auto text-center">
            <p className="text-cosmic-error mb-4">{error}</p>
            <button 
              onClick={handleRetry} 
              className="btn-gradient-secondary btn-press inline-block"
            >
              <span>Retry</span>
            </button>
          </div>
        ) : teams.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {teams.map((team, index) => (
              <div 
                key={team.id} 
                className="cosmic-card cosmic-card-hover border border-space-purple/30 overflow-hidden relative transform transition-all duration-300 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Rank indicator */}
                <div className="absolute -top-6 -left-6">
                  <div className={`w-16 h-16 flex items-center justify-center rotate-12 shadow-lg cosmic-shadow-md ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 gold-glow' : 
                    index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 silver-glow' : 
                    index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-800 bronze-glow' : 
                    'bg-gradient-to-br from-space-indigo to-space-purple'
                  }`}>
                    <span className="text-lg font-bold text-white -rotate-12">#{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row p-6 gap-6">
                  {/* Team logo */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-space-indigo via-space-purple to-space-pink p-0.5 cosmic-shadow-sm">
                    <div className="w-full h-full bg-space-dark rounded-lg overflow-hidden">
                      <Image 
                        src={team.logo || '/default-team-logo.png'}
                        alt={team.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Team info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className={`text-xl font-bold font-space ${
                        index === 0 ? 'text-yellow-400 gold-glow-text' : 
                        index === 1 ? 'text-gray-300 silver-glow-text' : 
                        index === 2 ? 'text-amber-600 bronze-glow-text' : ''
                      }`}>{team.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-cosmic-text-tertiary text-sm">Points:</span>
                        <span className="text-xl font-bold text-space-gold cosmic-glow-cyan">{team.points}</span>
                      </div>
                    </div>
                    
                    <p className="text-cosmic-text-secondary mb-4 line-clamp-2">
                      {team.description || 'No description provided.'}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <span className="text-space-cyan mr-2 text-sm">Created by:</span>
                        <span className="text-cosmic-text-secondary">{team.createdByUsername || team.createdBy.split('@')[0]}</span>
                      </div>
                      
                      <Link 
                        href={`/teams/${team.id}`}
                        className="btn-gradient-secondary btn-press btn-shine py-1 px-4 text-sm group"
                      >
                        <span className="group-hover:animate-pulse-light">View Team</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cosmic-card border border-dashed border-space-purple/30 p-8 max-w-lg mx-auto text-center">
            <p className="text-cosmic-text-secondary mb-4">No teams found. Be the first to create a team!</p>
            <Link href="/create-team" className="btn-gradient btn-press btn-shine inline-block">
              <span>Create Team</span>
            </Link>
          </div>
        )}
        
        {!loading && !error && teams.length > 0 && (
          <div className="mt-10 text-center">
            <Link 
              href="/blitz-teams" 
              className="btn-gradient btn-press btn-shine py-2 px-6 inline-block"
            >
              <span className="flex items-center gap-2">
                <span>View All Teams</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
