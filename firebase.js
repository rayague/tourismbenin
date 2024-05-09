import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5MKcN_Z8oP2Q9pXrgtDeo_FlGuBxbNkU",
  authDomain: "tourismbenin-5537d.firebaseapp.com",
  projectId: "tourismbenin-5537d",
  storageBucket: "tourismbenin-5537d.appspot.com",
  messagingSenderId: "436146337211",
  appId: "1:436146337211:web:a6d822b7a7b6a50886409e",
  measurementId: "G-K3BLDD4DM2",
};

const app = initializeApp(firebaseConfig);

// Initialise Firebase
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Exportez le service authentification
export { auth };
