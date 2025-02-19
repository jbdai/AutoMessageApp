import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Ensure environment variables are loaded
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "missing-api-key",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "missing-auth-domain",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "missing-project-id",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "missing-storage-bucket",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "missing-messaging-sender-id",
    appId: process.env.REACT_APP_FIREBASE_APP_ID || "missing-app-id"
};

// Check if any key is missing
Object.entries(firebaseConfig).forEach(([key, value]) => {
    if (value.startsWith("missing")) {
        console.warn(`Firebase config error: ${key} is missing.`);
    }
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
