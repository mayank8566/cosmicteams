const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

// Initialize Firebase Admin
const serviceAccount = require('../serviceAccountKey.json');

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const auth = getAuth();

async function grantAdminAccess() {
  try {
    console.log('Looking up user by email: alok905621@gmail.com');
    // Find the user by email
    const userRecord = await auth.getUserByEmail('alok905621@gmail.com');
    const uid = userRecord.uid;
    
    console.log(`Found user with UID: ${uid}`);
    
    // Update user profile with admin role
    await db.collection('userProfiles').doc(uid).update({
      role: 'admin',
      isAdmin: true,
      adminGrantedAt: new Date()
    });
    
    console.log('Admin access granted successfully!');
  } catch (error) {
    console.error('Error granting admin access:', error);
    
    if (error.code === 'auth/user-not-found') {
      console.error('User with this email does not exist. Please check the email address.');
    } else if (error.code === 'permission-denied') {
      console.error('Your Firebase Admin SDK does not have permission to modify user roles.');
    }
  }
}

grantAdminAccess().then(() => {
  console.log('Script completed');
  process.exit(0);
}).catch(err => {
  console.error('Script failed:', err);
  process.exit(1);
});
