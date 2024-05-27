
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRAFlDT3IqkY-DRV_wkHkm_265dHrQluQ",
  authDomain: "blogging-app-10f2f.firebaseapp.com",
  projectId: "blogging-app-10f2f",
  storageBucket: "blogging-app-10f2f.appspot.com",
  messagingSenderId: "357860047043",
  appId: "1:357860047043:web:a0c9134a3802eadb42ca76",
  measurementId: "G-35QECVDVHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
