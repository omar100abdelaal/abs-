// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAya1NyGSLOoAJTo3lY1qsaolIqI1LCS4s",
  authDomain: "abs-company-539aa.firebaseapp.com",
  projectId: "abs-company-539aa",
  storageBucket: "abs-company-539aa.firebasestorage.app",
  messagingSenderId: "590454621417",
  appId: "1:590454621417:web:848aa82f6ef70244335c78",
  measurementId: "G-BV6HDF62KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);