// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjDs9AZN7sWJYmy_0kEsIrgFc8AWSoHVQ",
  authDomain: "my-first-react-bcf76.firebaseapp.com",
  projectId: "my-first-react-bcf76",
  storageBucket: "my-first-react-bcf76.appspot.com",
  messagingSenderId: "1084855893238",
  appId: "1:1084855893238:web:d14d88eaad4088dcf740d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
