// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDYWhxUfdKA3EmT_VNwXU-5wj6MNi45Jw",
  authDomain: "citeskinepaiva.firebaseapp.com",
  projectId: "citeskinepaiva",
  storageBucket: "citeskinepaiva.appspot.com",
  messagingSenderId: "121987392178",
  appId: "1:121987392178:web:14dddc7cbb7cc4bde65fab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)