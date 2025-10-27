// firebase.ts
import { getApp, getApps, initializeApp, FirebaseApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
  Auth,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-foZ5G0dpDTgGyo3PZyIBg16MRG5Jh8M',
  authDomain: 'smart-ecommerce-app-ef5d2.firebaseapp.com',
  projectId: 'smart-ecommerce-app-ef5d2',
  storageBucket: 'smart-ecommerce-app-ef5d2.firebasestorage.app',
  messagingSenderId: '375350045195',
  appId: '1:375350045195:web:41bcec56916222dbe1f50e',
};

// --- Initialize Firebase app safely ---
const app: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// --- Initialize Auth (with React Native persistence) ---
let auth: Auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  auth = getAuth(app);
}

// --- Initialize Firestore ---
const db: Firestore = getFirestore(app);

export { app, auth, db };
