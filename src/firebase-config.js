// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1SEoi5l66_aPWbZ9MgEOvuuJliZgbjfc",
  authDomain: "blog-3f41a.firebaseapp.com",
  projectId: "blog-3f41a",
  storageBucket: "blog-3f41a.appspot.com",
  messagingSenderId: "726411386968",
  appId: "1:726411386968:web:494a9b482f1db252aa2a2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
