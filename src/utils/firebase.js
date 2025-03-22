// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4NEJIO2l85CNnZh32lPlYzd6kShQfgfI",
  authDomain: "netflix-gpt-bbf54.firebaseapp.com",
  projectId: "netflix-gpt-bbf54",
  storageBucket: "netflix-gpt-bbf54.firebasestorage.app",
  messagingSenderId: "792573079640",
  appId: "1:792573079640:web:3400a0440a1fd0af8b9a2d",
  measurementId: "G-S0EXYVBN9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();