import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  addDoc, orderBy, arrayUnion, runTransaction,
  getFirestore, doc, or, setDoc, getDoc, query, where,
  updateDoc, collection, getDocs, onSnapshot, deleteDoc,
} from "firebase/firestore";
import {
  getStorage, ref, uploadBytes,
  getDownloadURL, deleteObject,
} from "firebase/storage";
import { EnvironmentTypeEnum } from "@utilities/enums";

const IS_PRODUCTION = process.env.REACT_APP_APP_ENV === EnvironmentTypeEnum.PRODUCTION;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: IS_PRODUCTION ? process.env.REACT_APP_MEASUREMENT_ID : '',
};

const app = initializeApp(firebaseConfig);
if(IS_PRODUCTION){
  const analytics = getAnalytics(app);
}

const db = getFirestore(app);
const storage = getStorage(app);

export {
  db, doc, or, setDoc, getDoc, updateDoc, collection,
  addDoc, orderBy, arrayUnion, runTransaction,
  getDocs, query, where, storage, ref, uploadBytes,
  getDownloadURL, onSnapshot, deleteDoc, deleteObject,
};
