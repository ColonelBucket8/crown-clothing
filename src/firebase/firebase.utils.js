import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCbJ2C5-Hh7mW1kjvF0nvI3rk8uznFURkw",
  authDomain: "crown-db-ebecb.firebaseapp.com",
  projectId: "crown-db-ebecb",
  storageBucket: "crown-db-ebecb.appspot.com",
  messagingSenderId: "301687573097",
  appId: "1:301687573097:web:52a42425a2f6c89a23f0f8",
  measurementId: "G-F3FFRF55D9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
