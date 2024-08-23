// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg2YK3ij2cI32byhsDfkqU1nO7WV-bF4A",
  authDomain: "bnma-d940a.firebaseapp.com",
  projectId: "bnma-d940a",
  storageBucket: "bnma-d940a.appspot.com",
  messagingSenderId: "294873483272",
  appId: "1:294873483272:web:95bd86f7416c9a966429bd",
  measurementId: "G-PXE7T35W18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);