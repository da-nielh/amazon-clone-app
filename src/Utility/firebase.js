// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth' // it's for Autentication
import 'firebase/compat/firestore' // to integrate firestore of if we use database
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDljis0Bfk7TZKhQR8XM6vLoZIc5zWL5cY",
  authDomain: "clone-app-acf89.firebaseapp.com",
  projectId: "clone-app-acf89",
  storageBucket: "clone-app-acf89.appspot.com",
  messagingSenderId: "16602792734",
  appId: "1:16602792734:web:3252d544c3ca0981bfbf0f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()