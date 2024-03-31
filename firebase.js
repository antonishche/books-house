// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNn05Utvk9mUF0xVsfKgm0p2sHdhA6upk",
  authDomain: "book-reader-3e02b.firebaseapp.com",
  projectId: "book-reader-3e02b",
  storageBucket: "book-reader-3e02b.appspot.com",
  messagingSenderId: "262875040250",
  appId: "1:262875040250:web:7502da8371b104b038bc43",
  measurementId: "G-S75107RMR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);