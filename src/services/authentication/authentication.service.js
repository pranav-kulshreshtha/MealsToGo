import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBK_I4Rk7RfuxehZONclKB2EcrbPS4Go0k",
    authDomain: "mealstogo-946da.firebaseapp.com",
    projectId: "mealstogo-946da",
    storageBucket: "mealstogo-946da.appspot.com",
    messagingSenderId: "1012784524380",
    appId: "1:1012784524380:web:5b5694f897b43dbdc1ca99"
  };

const app = firebase.initializeApp(firebaseConfig);

export const loginRequest = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);