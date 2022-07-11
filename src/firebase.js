// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaCNlgci3nyCzpzgEa_q0fbfFjAuwumWY",
  authDomain: "web-ecommerce-3c648.firebaseapp.com",
  projectId: "web-ecommerce-3c648",
  storageBucket: "web-ecommerce-3c648.appspot.com",
  messagingSenderId: "725447832646",
  appId: "1:725447832646:web:a1bd88fa8b580df2464647",
  measurementId: "G-MS4WEBYWRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);