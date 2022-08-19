import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGF0How2-A3KI_EVUWR_-HJLWNXPv4YmQ",
  authDomain: "vibgjor-interiors.firebaseapp.com",
  projectId: "vibgjor-interiors",
  storageBucket: "vibgjor-interiors.appspot.com",
  messagingSenderId: "426259620991",
  appId: "1:426259620991:web:16f979e17e056662068b4a",
  measurementId: "G-S30TP213HF",
};

firebaseConfig.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
