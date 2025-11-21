import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Dfh7uWHzXtjtQ_weJSrgBkw7SOHDIvk",
  authDomain: "webproj-18864.firebaseapp.com",
  projectId: "webproj-18864",
  storageBucket: "webproj-18864.firebasestorage.app",
  messagingSenderId: "1038816642924",
  appId: "1:1038816642924:web:019846bfb58489384f9549",
  measurementId: "G-BHDZZRFTS2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);