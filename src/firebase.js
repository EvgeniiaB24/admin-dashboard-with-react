import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:"AIzaSyBT9ssh3HfwPLcJP6S6atHLwRFzsSRQ5RY"
,
  authDomain: "admindashboard-ea09a.firebaseapp.com",
  projectId: "admindashboard-ea09a",
  storageBucket: "admindashboard-ea09a.appspot.com",
  messagingSenderId: "642799383799",
  appId: "1:642799383799:web:2ea12d2581388409d60ff2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);