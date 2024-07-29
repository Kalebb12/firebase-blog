import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider
} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKVsVhC3NnOTXF66eXtm5d0yNXWzKQer4",
  authDomain: "blog-app-a3534.firebaseapp.com",
  projectId: "blog-app-a3534",
  storageBucket: "blog-app-a3534.appspot.com",
  messagingSenderId: "377894063204",
  appId: "1:377894063204:web:55abe32e1b9985f96d2371",
  measurementId: "G-MCSGW61NP1"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider()
export const  db = getFirestore(app)