import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyClE29YVCFdB-OlAMvQle5RYtNPDskTZ4k",
    authDomain: "gtx-whitelist.firebaseapp.com",
    databaseURL: "https://gtx-whitelist-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gtx-whitelist",
    storageBucket: "gtx-whitelist.appspot.com",
    messagingSenderId: "387095614068",
    appId: "1:387095614068:web:c0057dbcb94256376bb721"
  };
  
  // Init firebase db
  export const db = firebase.initializeApp(firebaseConfig).database();
  export const requestsRef = db.ref('requests');