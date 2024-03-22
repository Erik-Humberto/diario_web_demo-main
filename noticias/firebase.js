
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXOnq4sLwiqYPesMlHZJJlAdoFKYif9X4",
  authDomain: "secret-antonym-407305.firebaseapp.com",
  projectId: "secret-antonym-407305",
  storageBucket: "secret-antonym-407305.appspot.com",
  messagingSenderId: "962651063681",
  appId: "1:962651063681:web:d0fb4a89d870f3ede79480",
  measurementId: "G-SZ68KCZPZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
