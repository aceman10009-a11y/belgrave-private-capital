import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJB-Y_s1S4cCX-guX9NutQ_Y2MeWTuYgU",
  authDomain: "belgrave-private-capital.firebaseapp.com",
  projectId: "belgrave-private-capital",
  storageBucket: "belgrave-private-capital.firebasestorage.app",
  messagingSenderId: "370723937976",
  appId: "1:370723937976:web:762b19f25e73deba815e4d"
};
// =====================
// INIT APP (ONLY ONCE)
// =====================
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// =====================
// AUTH PERSISTENCE
// =====================
setPersistence(auth, browserLocalPersistence)
  .catch((err) => console.warn("Persistence error:", err));

// =====================
// EXPORTS
// =====================
export {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
};