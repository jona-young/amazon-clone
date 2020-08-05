import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmFN42pbksBQNNzghzz8QCD3BGXIrwNkA",
  authDomain: "clone-a3b43.firebaseapp.com",
  databaseURL: "https://clone-a3b43.firebaseio.com",
  projectId: "clone-a3b43",
  storageBucket: "clone-a3b43.appspot.com",
  messagingSenderId: "1061537625826",
  appId: "1:1061537625826:web:21ab30634098ab6b2210bb",
  measurementId: "G-50SQD642Y9",
});

const auth = firebase.auth();

export { auth };
