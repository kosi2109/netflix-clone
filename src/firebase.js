// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import {initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhJS3p4aaHbesfec-ADmqcMGciMe487m8",
  authDomain: "netflix-clone-c5457.firebaseapp.com",
  projectId: "netflix-clone-c5457",
  storageBucket: "netflix-clone-c5457.appspot.com",
  messagingSenderId: "258215102252",
  appId: "1:258215102252:web:fd49872f2461b165010e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;