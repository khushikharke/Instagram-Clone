import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA85IGYLW6MLVYtJ-d0kOGEC91YwsTAHWk",
  authDomain: "instagram-clone-41c5e.firebaseapp.com",
  projectId: "instagram-clone-41c5e",
  storageBucket: "instagram-clone-41c5e.appspot.com",
  messagingSenderId: "277925626410",
  appId: "1:277925626410:web:b3fc1c02b74da3ecea7953",
  measurementId: "G-6WPJ6J8YLN"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {app, auth, firestore, storage};
