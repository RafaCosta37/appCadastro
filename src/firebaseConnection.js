
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyBQMn4-Dq-3Z1rj67NKtG3yi4hOsSkdLRY",
  authDomain: "devcurso-bfaaf.firebaseapp.com",
  projectId: "devcurso-bfaaf",
  storageBucket: "devcurso-bfaaf.firebasestorage.app",
  messagingSenderId: "720801575203",
  appId: "1:720801575203:web:ed91db286c3e85a98f5c96"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth };