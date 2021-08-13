import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyAwmtbkfG8E09vApznGFS19Q1VXQY7s_8k",
    authDomain: "anonymous-twitter-9079b.firebaseapp.com",
    projectId: "anonymous-twitter-9079b",
    storageBucket: "anonymous-twitter-9079b.appspot.com",
    messagingSenderId: "294309255162",
    appId: "1:294309255162:web:4466332d0dd41b2ebc3643"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export  const firestore= firebase.firestore();
export default firebase;