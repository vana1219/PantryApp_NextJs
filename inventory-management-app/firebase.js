// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9mtnGBYszF73HyANkpryuT1iEAaBoDEo",
  authDomain: "pantryapp-8472a.firebaseapp.com",
  projectId: "pantryapp-8472a",
  storageBucket: "pantryapp-8472a.appspot.com",
  messagingSenderId: "537681679047",
  appId: "1:537681679047:web:77e2c5b3dde06789f0e4e2",
  measurementId: "G-7EBXMPPKRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}