// credenciales.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBFuORFeS4KwqSto6HkSe_WO-BE1bMpfgY",
    authDomain: "suples.firebaseapp.com",
    projectId: "suples",
    storageBucket: "suples.appspot.com",
    messagingSenderId: "236385709480",
    appId: "1:236385709480:web:0cfaa8945686ee0a53419d"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const firestore = getFirestore(app);

// Exporta la aplicación y Firestore
export { app, firestore };
