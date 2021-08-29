// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDp09M06WWhC30FHsSfSHjK3IMrvCNlOBk",
  authDomain: "challenge-be63b.firebaseapp.com",
  projectId: "challenge-be63b",
  storageBucket: "challenge-be63b.appspot.com",
  messagingSenderId: "566159496466",
  appId: "1:566159496466:web:9feb99b299149f22f70fcb",
  measurementId: "G-PJ281K369D"
};

  

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth = firebase.auth()

