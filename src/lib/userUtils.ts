import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

/**
 * Gets a user's display name from their email
 * @param email The user's email address
 * @returns The user's display name or null if not found
 */
export async function getUsernameByEmail(email: string): Promise<string | null> {
  try {
    // Query the users collection for the matching email
    const userQuery = query(
      collection(db, 'users'),
      where('email', '==', email)
    );
    
    const querySnapshot = await getDocs(userQuery);
    
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      // Return display name or if not found, return first part of email
      return userData.displayName || email.split('@')[0];
    }
    
    // If user not found in Firestore, just return first part of email
    return email.split('@')[0];
  } catch (error) {
    console.error('Error getting username by email:', error);
    // Return first part of email as fallback
    return email.split('@')[0];
  }
}

/**
 * Gets a list of usernames from a list of emails
 * @param emails List of email addresses
 * @returns Object mapping emails to usernames
 */
export async function getUsernamesByEmails(emails: string[]): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  
  // Process in batches to avoid too many parallel requests
  const batchSize = 10;
  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);
    const promises = batch.map(async (email) => {
      const username = await getUsernameByEmail(email);
      result[email] = username || email.split('@')[0];
    });
    
    await Promise.all(promises);
  }
  
  return result;
}

/**
 * Gets a user's email from their username
 * @param username The username to look up
 * @returns The user's email or null if not found
 */
export async function getEmailByUsername(username: string): Promise<string | null> {
  try {
    // First try exact displayName match
    let userQuery = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );
    
    let querySnapshot = await getDocs(userQuery);
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data().email || null;
    }
    
    // If not found, try case-insensitive search (startsWith + endsWith)
    // This is a workaround since Firestore doesn't support case-insensitive queries directly
    const allUsersQuery = query(collection(db, 'users'));
    const allUsersSnapshot = await getDocs(allUsersQuery);
    
    const matchingUser = allUsersSnapshot.docs.find(doc => {
      const userData = doc.data();
      return userData.displayName && 
             userData.displayName.toLowerCase() === username.toLowerCase();
    });
    
    if (matchingUser) {
      return matchingUser.data().email || null;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting email by username:', error);
    return null;
  }
}
