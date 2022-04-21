// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1pV5uDQz7EHDREu2-FbvvZDMpYXCEaz4',
  authDomain: 'devquiz-ed9e9.firebaseapp.com',
  projectId: 'devquiz-ed9e9',
  storageBucket: 'devquiz-ed9e9.appspot.com',
  messagingSenderId: '421529102488',
  appId: '1:421529102488:web:e5eaf4af8ad74bdbbd48ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
