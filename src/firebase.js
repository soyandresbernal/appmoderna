import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-UPZtRfUqKSlwmr2QOtjNucdSli6nanI",
  authDomain: "crud-cb61b.firebaseapp.com",
  projectId: "crud-cb61b",
  storageBucket: "crud-cb61b.appspot.com",
  messagingSenderId: "1011245345260",
  appId: "1:1011245345260:web:1009695345f99b80e078c9",
};

// Initialize Firebase
export const firebaseApp =
  firebase.initializeApp(firebaseConfig);
