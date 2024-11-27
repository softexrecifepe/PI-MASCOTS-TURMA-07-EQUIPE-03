import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrG1E-zjfZCdgQKPoFwCW8orONR5monPY",
    authDomain: "mascot-s.firebaseapp.com",
    databaseURL: "https://mascot-s-default-rtdb.firebaseio.com",
    projectId: "mascot-s",
    storageBucket: "mascot-s.firebasestorage.app",
    messagingSenderId: "1083624344629",
    appId: "1:1083624344629:web:36ebb298d795322196f57c",
    measurementId: "G-V9B5FWGZ71"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
