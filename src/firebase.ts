// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRjXARjnt8SXFnAvAcm6vNVEej4nToMH0",
    authDomain: "galante-portfolio.firebaseapp.com",
    projectId: "galante-portfolio",
    storageBucket: "galante-portfolio.firebasestorage.app",
    messagingSenderId: "725440452898",
    appId: "1:725440452898:web:03da63227538105fc16d7b",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
