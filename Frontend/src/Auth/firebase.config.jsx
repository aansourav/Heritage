// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUKDGFL79xQWEScfX5D-zbSBM8fogGT8g",
    authDomain: "heritage-e932a.firebaseapp.com",
    projectId: "heritage-e932a",
    storageBucket: "heritage-e932a.appspot.com",
    messagingSenderId: "61790073117",
    appId: "1:61790073117:web:42adec456acd150e6ef1f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
