// Utility functions for Firebase

import { db } from './firebase';

/**
 * Adds a random query parameter to force a fresh query execution.
 * This helps when there are issues with Firestore indexes.
 */
export const refreshQuery = (): string => {
  const timestamp = new Date().getTime();
  console.log(`Adding refresh token: ${timestamp}`);
  return timestamp.toString();
};

/**
 * Waits for a specified time. Useful for allowing Firebase operations to complete.
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
