import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import { initializeApp } from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDl23OiIDDPHKmZoFqPrj_DsZlvGC0E2sU",
  authDomain: "clone-7d830.firebaseapp.com",
  projectId: "clone-7d830",
  storageBucket: "clone-7d830.appspot.com",
  messagingSenderId: "947701440171",
  appId: "1:947701440171:web:dbc2e302e775f1c5dae1ee",
  measurementId: "G-7L73JXCF75"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// export default firebase;
export { db, auth }

