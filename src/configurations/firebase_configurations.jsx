// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVInW6nR8CaUnSSulP7QTGfsOgYbEXQLM",
    authDomain: "journeysync-f28e0.firebaseapp.com",
    projectId: "journeysync-f28e0",
    storageBucket: "journeysync-f28e0.appspot.com",
    messagingSenderId: "931209908859",
    appId: "1:931209908859:web:0e1336b5ba19cbc92a08de",
    measurementId: "G-EJSRR7RZB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);