import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCVK_vALMYaNrbOuUHYwVd8iXt4mrllCfE",
  authDomain: "aragon-challenge.firebaseapp.com",
  projectId: "aragon-challenge",
  storageBucket: "aragon-challenge.appspot.com",
  messagingSenderId: "763819454100",
  appId: "1:763819454100:web:77a3e9b5de01140c840e81"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
