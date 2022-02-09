// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEzQ5xSLcUZmtbp_o0_2Xb8T_bk1x3PLE",
  authDomain: "mistec-cardarelli-coder.firebaseapp.com",
  projectId: "mistec-cardarelli-coder",
  storageBucket: "mistec-cardarelli-coder.appspot.com",
  messagingSenderId: "195577472550",
  appId: "1:195577472550:web:3fb8623487fa9a67b9e8e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
