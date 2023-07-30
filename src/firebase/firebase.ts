// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqbdRKttW_vptlOXiSi7dpXXndR-JdzTk',
  authDomain: 'connection-e18b9.firebaseapp.com',
  projectId: 'connection-e18b9',
  storageBucket: 'connection-e18b9.appspot.com',
  messagingSenderId: '749590134805',
  appId: '1:749590134805:web:56d7313716cb00e2f04e1c',
  measurementId: 'G-TBVEVCW12L',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
