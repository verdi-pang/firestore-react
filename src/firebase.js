// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_LgEnjSN1q9L9TlI8ZbVdZoZ0BqfYQm0",
  authDomain: "fir-react-27e6b.firebaseapp.com",
  projectId: "fir-react-27e6b",
  storageBucket: "fir-react-27e6b.appspot.com",
  messagingSenderId: "466834619243",
  appId: "1:466834619243:web:c2070290fcaf71d86aaa2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db};
