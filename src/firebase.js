// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0pNqF2DVDArMv9QuJL_3Q1frx1Pi6L28",
  authDomain: "login-90989.firebaseapp.com",
  projectId: "login-90989",
  storageBucket: "login-90989.appspot.com",
  messagingSenderId: "706964434974",
  appId: "1:706964434974:web:73c35116978ebefea2fe0f",
  measurementId: "G-SV37YN5SCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export default app;