import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDVnXESum8OH97G4UhV6HsKeN7uDXOBkQ8",
  authDomain: "tittok---jornadadev.firebaseapp.com",
  projectId: "tittok---jornadadev",
  storageBucket: "tittok---jornadadev.appspot.com",
  messagingSenderId: "361130159193",
  appId: "1:361130159193:web:a3ee30d38d975895be5548"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;