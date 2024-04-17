// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ACA TIENE QUE PONER CADA UNO SU CONFIGURACION DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBU3MWsE2QXwYOF_l9LTjHG1u86wnqahm4",
  authDomain: "ecommerce-ropa-14b0b.firebaseapp.com",
  projectId: "ecommerce-ropa-14b0b",
  storageBucket: "ecommerce-ropa-14b0b.appspot.com",
  messagingSenderId: "539196868408",
  appId: "1:539196868408:web:099f8516c42244a3f163cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, GoogleAuthProvider, signInWithPopup}; // Exporta el módulo de autenticación
