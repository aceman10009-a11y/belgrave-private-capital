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
  authDomain: "belgrave-private-bank.firebaseapp.com",
  projectId: "belgrave-private-bank",
  storageBucket: "belgrave-private-bank.appspot.com",
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
// AUTH STATE (NO UI LOGIC HERE)
// =====================
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  console.log("AUTH READY:", user.uid);

  // ❌ DO NOT TOUCH UI HERE
  // ❌ NO welcome text, no DOM manipulation
  // script.js handles all UI rendering
});

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