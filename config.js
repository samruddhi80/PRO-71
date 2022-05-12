import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDxr_-ZXb5cLFzRR8KVgq9UlYOaA095mfY",
    authDomain: "e-ride-52164.firebaseapp.com",
    projectId: "e-ride-52164",
    storageBucket: "e-ride-52164.appspot.com",
    messagingSenderId: "981622401370",
    appId: "1:981622401370:web:098ef99f55db615dd46b63"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
