'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  arrayUnion, 
  deleteDoc, 
  addDoc, 
  serverTimestamp, 
  getDoc 
} from 'firebase/firestore';

import { db } from '@/lib/firebase';

import HeaderWrapper from '@/components/HeaderWrapper';
import Link from 'next/link';
import Image from 'next/image';

interface Invitation {
  id: string;
  teamId: string;
  teamName: string;
  teamLogo?: string;
  invitedBy: string;
  invitedByUsername: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: any;
}

export default function MailPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [processingInvitation, setProcessingInvitation] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const fetchInvitations = async () => {
      try {
        setLoading(true);
        
        // Query invitations collection for the current user
        const invitationsQuery = query(
          collection(db, 'invitations'),
          where('invitedEmail', '==', user.email),
          where('status', '==', 'pending')
        );
        
        const invitationsSnapshot = await getDocs(invitationsQuery);
        const invitationsData: Invitation[] = [];
        
        // Process each invitation and get team details
        for (const docSnapshot of invitationsSnapshot.docs) {
          const data = docSnapshot.data();
          
          // Get team details for the invitation
          const teamDoc = await getDoc(doc(db, 'teams', data.teamId));
          if (teamDoc.exists()) {
            const teamData = teamDoc.data();
            
            invitationsData.push({
              id: docSnapshot.id,
              teamId: data.teamId,
              teamName: teamData.name || 'Unknown Team',
              teamLogo: teamData.logo,
              invitedBy: data.invitedBy,
              invitedByUsername: data.invitedByUsername || data.invitedBy.split('@')[0],
              status: data.status,
              createdAt: data.createdAt,
            });
          }
        }
        
        // Sort invitations by creation date (newest first)
        invitationsData.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          return b.createdAt.seconds - a.createdAt.seconds;
        });
        
        setInvitations(invitationsData);
      } catch (err) {
        console.error('Error fetching invitations:', err);
        setError('Failed to load your invitations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, [user, router]);

  const handleAcceptInvitation = async (invitation: Invitation) => {
    if (!user) return;
    setProcessingInvitation(invitation.id);
    
    try {
      // Get the team document
      const teamRef = doc(db, 'teams', invitation.teamId);
      const teamDoc = await getDoc(teamRef);
      
      if (!teamDoc.exists()) {
        throw new Error('Team no longer exists');
      }
      
      // Add user to team members
      await updateDoc(teamRef, {
        members: arrayUnion(user.email),
        updatedAt: serverTimestamp()
      });
      
      // Update invitation status
      const invitationRef = doc(db, 'invitations', invitation.id);
      await updateDoc(invitationRef, {
        status: 'accepted',
        respondedAt: serverTimestamp()
      });
      
      // Create notification for team leader
      await addDoc(collection(db, 'notifications'), {
        userId: teamDoc.data().createdBy,
        type: 'invitation_accepted',
        message: `${user.displayName || user.email} has accepted your invitation to join ${invitation.teamName}`,
        teamId: invitation.teamId,
        teamName: invitation.teamName,
        createdAt: serverTimestamp(),
        read: false
      });
      
      // Remove the accepted invitation from the list
      setInvitations(invitations.filter(inv => inv.id !== invitation.id));
      
    } catch (err) {
      console.error('Error accepting invitation:', err);
      setError('Failed to accept invitation. Please try again.');
    } finally {
      setProcessingInvitation(null);
    }
  };

  const handleDeclineInvitation = async (invitation: Invitation) => {
    if (!user) return;
    setProcessingInvitation(invitation.id);
    
    try {
      // Update invitation status
      const invitationRef = doc(db, 'invitations', invitation.id);
      await updateDoc(invitationRef, {
        status: 'declined',
        respondedAt: serverTimestamp()
      });
      
      // Create notification for team leader
      await addDoc(collection(db, 'notifications'), {
        userId: invitation.invitedBy,
        type: 'invitation_declined',
        message: `${user.displayName || user.email} has declined your invitation to join ${invitation.teamName}`,
        teamId: invitation.teamId,
        teamName: invitation.teamName,
        createdAt: serverTimestamp(),
        read: false
      });
      
      // Remove the declined invitation from the list
      setInvitations(invitations.filter(inv => inv.id !== invitation.id));
      
    } catch (err) {
      console.error('Error declining invitation:', err);
      setError('Failed to decline invitation. Please try again.');
    } finally {
      setProcessingInvitation(null);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown date';
    
    // Convert Firestore timestamp to JavaScript Date
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    
    // Format date as "Month Day, Year at Hour:Minute AM/PM"
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

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

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      <div className="container mx-auto px-4 py-8 flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8 p-6 bg-slate-800/80 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Mail
            </h1>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700">
              {error}
            </div>
          )}

          <div className="bg-white/5 rounded-lg backdrop-blur-sm shadow-xl mb-8 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                Team Invitations
              </h2>
            </div>

            {loading ? (
              <div className="flex justify-center py-10">
                <div className="w-10 h-10 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
              </div>
            ) : invitations.length === 0 ? (
              <div className="p-6 text-center text-white/70">
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 text-3xl mb-4 opacity-60">📪</div>
                  <p className="text-lg">No pending invitations</p>
                  <p className="text-sm text-white/50 mt-2">When you receive team invitations, they will appear here</p>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {invitations.map((invitation) => (
                  <div key={invitation.id} className="p-6 hover:bg-white/5 transition-colors">
                    <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        {invitation.teamLogo ? (
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/50">
                            <Image 
                              src={invitation.teamLogo} 
                              alt={invitation.teamName} 
                              width={56} 
                              height={56}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white font-bold text-xl">
                            {getInitialsLogo(invitation.teamName)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium text-white">
                          Invitation to join <span className="font-bold">{invitation.teamName}</span>
                        </h3>
                        <p className="text-white/70 text-sm mb-1">
                          Invited by <span className="text-purple-400">{invitation.invitedByUsername}</span>
                        </p>
                        <p className="text-white/50 text-xs">
                          {formatDate(invitation.createdAt)}
                        </p>
                      </div>
                      
                      <div className="flex gap-3 mt-4 md:mt-0">
                        <button
                          onClick={() => handleAcceptInvitation(invitation)}
                          disabled={processingInvitation === invitation.id}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center"
                        >
                          {processingInvitation === invitation.id ? (
                            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2"></span>
                          ) : null}
                          Accept
                        </button>
                        <button
                          onClick={() => handleDeclineInvitation(invitation)}
                          disabled={processingInvitation === invitation.id}
                          className="px-4 py-2 bg-transparent border border-red-500/50 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
