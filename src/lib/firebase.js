import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyADKYTRny2BgIX85UGs5C--FbTIlVdqv2k",
  authDomain: "fir-chat-poc-ac19d.firebaseapp.com",
  projectId: "fir-chat-poc-ac19d",
  storageBucket: "fir-chat-poc-ac19d.appspot.com",
  messagingSenderId: "912034015974",
  appId: "1:912034015974:web:fb6cd60e7eb167fb4b6927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()