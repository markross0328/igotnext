// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAijHXxObbh10kfj_oZpHAcmPjG-jIBhF8",
  authDomain: "igotnext-7777.firebaseapp.com",
  databaseURL: "https://igotnext-7777-default-rtdb.firebaseio.com",
  projectId: "igotnext-7777",
  storageBucket: "igotnext-7777.firebasestorage.app",
  messagingSenderId: "218375048210",
  appId: "1:218375048210:web:44db71aa195b5734be9ccb",
  measurementId: "G-GW8W4J4JPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default firebaseConfig;