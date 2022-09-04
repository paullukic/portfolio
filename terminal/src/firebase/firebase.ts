// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5k9KdSh2Kz6skG55x0inkSivcI12L5_0",
  authDomain: "portfolio-fa807.firebaseapp.com",
  projectId: "portfolio-fa807",
  storageBucket: "portfolio-fa807.appspot.com",
  messagingSenderId: "1032212620155",
  appId: "1:1032212620155:web:7958f60d2b306980fbd3de",
  measurementId: "G-LQJ2FKEYCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();