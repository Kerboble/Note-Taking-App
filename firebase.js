import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "notes-b5d5e.firebaseapp.com",
  projectId: "notes-b5d5e",
  storageBucket: "notes-b5d5e.appspot.com",
  messagingSenderId: "93873856506",
  appId: "1:93873856506:web:8ad0aaf180037719ac8e43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")