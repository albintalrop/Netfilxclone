// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1svEZiT6D9fzKfV3rl8XJq2hdsdZ4IWI",
    authDomain: "netflix-clone-bdaf2.firebaseapp.com",
    projectId: "netflix-clone-bdaf2",
    storageBucket: "netflix-clone-bdaf2.appspot.com",
    messagingSenderId: "632426212211",
    appId: "1:632426212211:web:c665eeb11c8e40c461f306",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
