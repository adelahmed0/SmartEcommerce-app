// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-foZ5G0dpDTgGyo3PZyIBg16MRG5Jh8M',
  authDomain: 'smart-ecommerce-app-ef5d2.firebaseapp.com',
  projectId: 'smart-ecommerce-app-ef5d2',
  storageBucket: 'smart-ecommerce-app-ef5d2.firebasestorage.app',
  messagingSenderId: '375350045195',
  appId: '1:375350045195:web:41bcec56916222dbe1f50e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
