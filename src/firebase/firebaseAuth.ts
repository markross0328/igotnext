// src/firebase/firebaseAuth.ts
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Import your Firebase config from firebaseConfig.ts
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase app (if not already initialized)
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
