// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk3mGss7aux_pkrB45afAWPCzORF3uFWQ",
  authDomain: "fir-chat-7f970.firebaseapp.com",
  projectId: "fir-chat-7f970",
  storageBucket: "fir-chat-7f970.firebasestorage.app",
  messagingSenderId: "598317820457",
  appId: "1:598317820457:web:5f36269db7a4c7d8324a38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
