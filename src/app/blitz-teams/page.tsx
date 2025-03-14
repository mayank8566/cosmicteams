'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { collection, query, getDocs, orderBy, DocumentData, QueryDocumentSnapshot, startAfter, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { refreshQuery, wait } from '@/lib/firebaseUtils';
import Image from 'next/image';
import Link from 'next/link';
import { getUsernameByEmail } from '@/lib/userUtils';
import HeaderWrapper from '@/components/HeaderWrapper';

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

const TEAMS_PER_PAGE = 10;

export default function BlitzTeamsPage() {
  const { user } = useAuth();
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastDocument, setLastDocument] = useState<QueryDocumentSnapshot | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

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

  const fetchTeams = async (lastDoc?: QueryDocumentSnapshot) => {
    // Add a refresh token to force a fresh query execution
    const refreshToken = refreshQuery();
    
    // Wait a moment to ensure Firebase has time to recognize the index
    await wait(500);
    
    try {
      let teamsQuery;
      
      if (lastDoc) {
        teamsQuery = query(
          collection(db, 'teams'),
          orderBy('points', 'desc'),
          startAfter(lastDoc),
          limit(TEAMS_PER_PAGE)
        );
      } else {
        teamsQuery = query(
          collection(db, 'teams'),
          orderBy('points', 'desc'),
          limit(TEAMS_PER_PAGE)
        );
      }
      
      const snapshot = await getDocs(teamsQuery);
      
      if (snapshot.empty) {
        setHasMore(false);
        if (!lastDoc) {
          // If this is the initial fetch and no docs found
          setTeams([]);
        }
        return;
      }
      
      // Set the last document for pagination
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDocument(lastVisible);
      
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
      
      // Get usernames for team leaders
      const teamsWithUsernames = await getTeamLeaderUsernames(teamsData);
      
      if (lastDoc) {
        // Append teams if loading more
        setTeams(prevTeams => [...prevTeams, ...teamsWithUsernames]);
      } else {
        // Replace teams if initial load
        setTeams(teamsWithUsernames);
      }
      
    } catch (err) {
      console.error('Error fetching teams:', err);
      setError('Failed to fetch teams. Please try again.');
      
      // Fall back to client-side sorting if the index doesn't exist
      if (!lastDoc) {
        try {
          const fallbackQuery = query(
            collection(db, 'teams'),
            limit(TEAMS_PER_PAGE * 2) // Fetch more to allow for client sorting
          );
          
          const fallbackSnapshot = await getDocs(fallbackQuery);
          const teamsData: TeamData[] = [];
          
          fallbackSnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
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
          
          // Sort teams by points client-side
          const sortedTeamsData = [...teamsData].sort((a, b) => b.points - a.points);
          
          // Get usernames for team leaders
          const teamsWithUsernames = await getTeamLeaderUsernames(sortedTeamsData.slice(0, TEAMS_PER_PAGE));
          setTeams(teamsWithUsernames);
          
          // Check if we have more
          setHasMore(sortedTeamsData.length > TEAMS_PER_PAGE);
          setLastDocument(null); // Can't use pagination with client sorting
          
        } catch (fallbackErr) {
          console.error('Fallback query also failed:', fallbackErr);
          setTeams([]);
        }
      }
    }
  };

  const handleLoadMore = async () => {
    if (!hasMore || loadingMore) return;
    
    setLoadingMore(true);
    await fetchTeams(lastDocument!);
    setLoadingMore(false);
  };

  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    setLastDocument(null);
    setHasMore(true);
    
    // Wrap in setTimeout to avoid potential Next.js hydration issues
    setTimeout(() => {
      fetchTeams().catch(error => {
        console.error('Failed to fetch teams:', error);
        setLoading(false);
        setError('Failed to fetch teams. Please try again.');
        setTeams([]);
      }).finally(() => {
        setLoading(false);
      });
    }, 0);
  };

  useEffect(() => {
    handleRetry();
  }, [user]);

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="flex-1 py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark to-space-darker overflow-hidden">
          {/* Space background elements */}
          <div className="absolute w-96 h-96 rounded-full bg-space-purple/10 blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
          <div className="absolute w-80 h-80 rounded-full bg-space-indigo/10 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
          <div className="absolute w-64 h-64 rounded-full bg-space-cyan/5 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"></div>
        </div>
      
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold font-space">
                <span className="gradient-text cosmic-gradient">Blitz Teams</span>
              </h1>
              <p className="text-cosmic-text-secondary mt-2">
                All teams ranked by cosmic points
              </p>
            </div>
            
            <Link href="/" className="btn-gradient-secondary btn-press py-2 px-4">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                Back
              </span>
            </Link>
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
            <>
              <div className="grid grid-cols-1 gap-6">
                {teams.map((team, index) => (
                  <div 
                    key={team.id} 
                    className="cosmic-card cosmic-card-hover border border-space-purple/30 overflow-hidden relative transform transition-all duration-300"
                  >
                    {/* Rank indicator */}
                    <div className="absolute -top-6 -left-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-space-indigo to-space-purple rotate-12 shadow-lg cosmic-shadow-md">
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
                          <h3 className="text-xl font-bold font-space">{team.name}</h3>
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
                          
                          <div className="flex items-center gap-2">
                            <span className="text-space-cyan text-sm">Team Size:</span>
                            <span className="text-cosmic-text-secondary">{team.members.length} members</span>
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
              
              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="btn-gradient btn-press btn-shine py-2 px-6 inline-block"
                  >
                    {loadingMore ? (
                      <span className="flex items-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Loading more...
                      </span>
                    ) : (
                      <span>Load More Teams</span>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="cosmic-card border border-dashed border-space-purple/30 p-8 max-w-lg mx-auto text-center">
              <p className="text-cosmic-text-secondary mb-4">No teams found. Be the first to create a team!</p>
              <Link href="/create-team" className="btn-gradient btn-press btn-shine inline-block">
                <span>Create Team</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
