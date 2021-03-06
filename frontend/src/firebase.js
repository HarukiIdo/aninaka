import firebase from "firebase/compat/app";
import "firebase/compat/auth";
console.log("実行");
console.log(process.env.REACT_APP_FIREBASE_KEY);
console.log(process.env);
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

const firebaseAuth = firebase.auth();

export { firebaseAuth };
