import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdE3cKLjd-9crc19vWPVwikam83GpU5Gc",
  authDomain: "crwn-db-49f2c.firebaseapp.com",
  projectId: "crwn-db-49f2c",
  storageBucket: "crwn-db-49f2c.appspot.com",
  messagingSenderId: "958259071300",
  appId: "1:958259071300:web:2aeccda6d5a7564d4aaf11",
  measurementId: "G-3N8XCFSQ9H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
