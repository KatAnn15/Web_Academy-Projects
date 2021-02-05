import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb-HWeGTUKSwSwcua0YvHTqEtUugdKARk",
  authDomain: "website-d1449.firebaseapp.com",
  databaseURL:
    "https://website-d1449-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "website-d1449",
  storageBucket: "website-d1449.appspot.com",
  messagingSenderId: "174424714203",
  appId: "1:174424714203:web:e68e179054c907a0d315fe",
  measurementId: "G-W6JSBQM390",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
