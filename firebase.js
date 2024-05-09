import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5MKcN_Z8oP2Q9pXrgtDeo_FlGuBxbNkU",
  authDomain: "tourismbenin-5537d.firebaseapp.com",
  projectId: "tourismbenin-5537d",
  storageBucket: "tourismbenin-5537d.appspot.com",
  messagingSenderId: "436146337211",
  appId: "1:436146337211:web:a6d822b7a7b6a50886409e",
  measurementId: "G-K3BLDD4DM2"
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig);

// Exportez le service authentification
export const auth = firebase.auth();
