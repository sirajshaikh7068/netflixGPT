// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqWkGu3qbjWgytdbNhi_y6tl2h6BEM-WA",
  authDomain: "netflix-gpt-8574a.firebaseapp.com",
  projectId: "netflix-gpt-8574a",
  storageBucket: "netflix-gpt-8574a.appspot.com",
  messagingSenderId: "373821470333",
  appId: "1:373821470333:web:e3b091c712411a08bee314",
  measurementId: "G-F9CW58LTX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
