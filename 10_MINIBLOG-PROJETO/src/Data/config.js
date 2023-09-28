import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJH3lPziB8sdN-GrYPz2SjWXmsON1UnNY",
  authDomain: "miniblog-59225.firebaseapp.com",
  projectId: "miniblog-59225",
  storageBucket: "miniblog-59225.appspot.com",
  messagingSenderId: "1091662051651",
  appId: "1:1091662051651:web:e866fbf6fc382209cc57f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
