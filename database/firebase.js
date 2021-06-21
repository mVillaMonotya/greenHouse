import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBw-QbVRk2IdTuKybSSMeW7-pq7B7PUrKE",
    authDomain: "green-house-9734c.firebaseapp.com",
    projectId: "green-house-9734c",
    storageBucket: "green-house-9734c.appspot.com",
    messagingSenderId: "904979246771",
    appId: "1:904979246771:web:18e9c526120ee651c6cac6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

  export default {
      firebase,
      db
  }