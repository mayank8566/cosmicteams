import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQf_QXzyZkyRxsbo91PJmdwjEn3lVfDTo",
  authDomain: "cosmicteams-bbf29.firebaseapp.com",
  projectId: "cosmicteams-bbf29",
  storageBucket: "cosmicteams-bbf29.appspot.com",
  messagingSenderId: "807144888137",
  appId: "1:807144888137:web:2621a3ac917d9675d6ec98"
};

// Initialize Firebase (client-side only)
let firebaseApp: FirebaseApp | undefined;
let auth: any = null;
let db: any = null;
let storage: any = null;
let googleProvider: any = null;

// Only initialize Firebase on the client side
if (typeof window !== 'undefined') {
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApps()[0];
  }

  if (firebaseApp) {
    auth = getAuth(firebaseApp);
    db = getFirestore(firebaseApp);
    storage = getStorage(firebaseApp);
    googleProvider = new GoogleAuthProvider();
  }
}

export { auth, db, storage, googleProvider };
export default firebaseApp;