// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-434c4.firebaseapp.com",
  projectId: "mern-estate-434c4",
  storageBucket: "mern-estate-434c4.appspot.com",
  messagingSenderId: "1063627281677",
  appId: "1:1063627281677:web:c902dd8c3bc1e46633cc44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);