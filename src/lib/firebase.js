import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjhtbqRwo1vEkhHQm19cjyFTnNjcrt5vs",
  authDomain: "suki-196e4.firebaseapp.com",
  projectId: "suki-196e4",
  storageBucket: "suki-196e4.appspot.com",
  messagingSenderId: "1007223203865",
  appId: "1:1007223203865:web:ae921052658963b76ca288",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
