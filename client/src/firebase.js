// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5372d.firebaseapp.com",
  projectId: "real-estate-5372d",
  storageBucket: "real-estate-5372d.appspot.com",
  messagingSenderId: "539345942183",
  appId: "1:539345942183:web:aea6540812f9aebb2f4d82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);