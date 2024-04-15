const { initializeApp } = require('firebase/app');
const { getAuth, setPersistence, browserLocalPersistence } = require('firebase/auth');
const dotenv = require('dotenv');

dotenv.config();
const { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Continuar con otras operaciones de Firebase
  })
  .catch((error) => {
    // Manejar el error de habilitación de persistencia
    console.error("Error enabling persistence:", error);
  });

module.exports = auth;