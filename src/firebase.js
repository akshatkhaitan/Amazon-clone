// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGrWLAIn8KmdZD0kkFVU_XOgXXXkb4vg0",
  authDomain: "challenge-2d7f3.firebaseapp.com",
  projectId: "challenge-2d7f3",
  storageBucket: "challenge-2d7f3.appspot.com",
  messagingSenderId: "500556900954",
  appId: "1:500556900954:web:823b9b26862634d20c8663",
  measurementId: "G-J96D2ZSLTN"
};

  

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth = firebase.auth()

