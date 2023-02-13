// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database'
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx-3F-1zVMD9MHJEn2dESHvZEQMOUpBfg",
  authDomain: "ttugbaegi0521-f4eb2.firebaseapp.com",
  databaseURL: "https://ttugbaegi0521-f4eb2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ttugbaegi0521-f4eb2",
  storageBucket: "ttugbaegi0521-f4eb2.appspot.com",
  messagingSenderId: "977356316825",
  appId: "1:977356316825:web:fcae721a43535a17fdd808"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default {app,auth};