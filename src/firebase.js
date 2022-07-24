// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";

// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBuFNYMe11q2DF22ULevisoiE1P-RnZfoM",
//   authDomain: "clone-57f4b.firebaseapp.com",
//   projectId: "clone-57f4b",
//   storageBucket: "clone-57f4b.appspot.com",
//   messagingSenderId: "741958971658",
//   appId: "1:741958971658:web:7037d619035872da65caf3",
//   measurementId: "G-52H387GNY7",
// };

// // initialize firebase first
// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// // second intialize firestore (real-time dataBase for firebase)]

// const auth = getAuth(app);
// const db = getFirestore(app);

// // export default firebase;
// export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4F59O7Eo426ZOEkb_2VJ6TK_NiWYNEeQ",
  authDomain: "challenge1-e10b0.firebaseapp.com",
  projectId: "challenge1-e10b0",
  storageBucket: "challenge1-e10b0.appspot.com",
  messagingSenderId: "382592058915",
  appId: "1:382592058915:web:0109a6f5641592a6d75396",
  measurementId: "G-JZX01PC5RD"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
