// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ACA TIENE QUE PONER CADA UNO SU CONFIGURACION DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCBjX5C2R6XSPKhg__B5PJe1CPNE-RRdS4",
  authDomain: "rick-and-morty-api-spa.firebaseapp.com",
  projectId: "rick-and-morty-api-spa",
  storageBucket: "rick-and-morty-api-spa.appspot.com",
  messagingSenderId: "208786305357",
  appId: "1:208786305357:web:1f0e6b9c7629f77613c704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, GoogleAuthProvider, signInWithPopup}; // Exporta el módulo de autenticación
