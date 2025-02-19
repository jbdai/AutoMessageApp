import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAW8h5YC3_padOgdse8CETxChCc-7u4-tY",
    authDomain: "automessageapp-49e02.firebaseapp.com",
    projectId: "automessageapp-49e02",
    storageBucket: "automessageapp-49e02.firebasestorage.app",
    messagingSenderId: "816228499235",
    appId: "1:816228499235:web:630f77ba8c23ece46a9696",
    measurementId: "G-NF3646XV84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, query, where, getDocs };
