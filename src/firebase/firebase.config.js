// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBriy4wjrzbSqb9YkRRlYBe1gTMBD1zFOM",
  authDomain: "chill-gamer-2024.firebaseapp.com",
  projectId: "chill-gamer-2024",
  storageBucket: "chill-gamer-2024.firebasestorage.app",
  messagingSenderId: "201173778347",
  appId: "1:201173778347:web:ceb70e065949e430329cee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
