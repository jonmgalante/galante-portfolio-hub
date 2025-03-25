
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgrCuWReR42B8nDibiG4GQ3jhwDeKdefc",
  authDomain: "jonmgalante-5c51c.firebaseapp.com",
  projectId: "jonmgalante-5c51c",
  storageBucket: "jonmgalante-5c51c.firebasestorage.app",
  messagingSenderId: "66224729747",
  appId: "1:66224729747:web:35d747874f0e9743fd2766",
  measurementId: "G-3L6DYESR2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
