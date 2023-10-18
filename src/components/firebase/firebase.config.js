// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrafOBa8d6Ix6eUYPyYvvEEUANRMLTwGA",
  authDomain: "cosmetics-and-beauty.firebaseapp.com",
  projectId: "cosmetics-and-beauty",
  storageBucket: "cosmetics-and-beauty.appspot.com",
  messagingSenderId: "654036391231",
  appId: "1:654036391231:web:f1d9be3be57855e7c56f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;