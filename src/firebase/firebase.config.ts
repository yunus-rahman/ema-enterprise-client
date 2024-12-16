// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAkIV3aiUk_mJ_0TWeJl8ZzHmIqGN6tGM",
    authDomain: "ema-enterprise-kus.firebaseapp.com",
    projectId: "ema-enterprise-kus",
    storageBucket: "ema-enterprise-kus.firebasestorage.app",
    messagingSenderId: "42340845391",
    appId: "1:42340845391:web:0a374b77407dccf47ea73a",
    measurementId: "G-GPWGXSS4BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;