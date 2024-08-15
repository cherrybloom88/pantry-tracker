// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIAlO-eb2mTwP1rowptrWeozVYmmC6ls",
  authDomain: "inventory-management-3196d.firebaseapp.com",
  projectId: "inventory-management-3196d",
  storageBucket: "inventory-management-3196d.appspot.com",
  messagingSenderId: "687097668386",
  appId: "1:687097668386:web:f65fb2c5eaa38bac42fb7b",
  measurementId: "G-ZTP7J560XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
 export {firestore};