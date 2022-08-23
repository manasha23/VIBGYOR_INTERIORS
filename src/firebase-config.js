import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAGF0How2-A3KI_EVUWR_-HJLWNXPv4YmQ",
  authDomain: "vibgjor-interiors.firebaseapp.com",
  projectId: "vibgjor-interiors",
  storageBucket: "vibgjor-interiors.appspot.com",
  messagingSenderId: "426259620991",
  appId: "1:426259620991:web:16f979e17e056662068b4a",
  measurementId: "G-S30TP213HF",
};
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)
export const db = getFirestore(app);
