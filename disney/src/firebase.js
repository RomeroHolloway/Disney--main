import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0zr6fd2MqCIjsLpGIm4lq-0Ctncg9-24",
    authDomain: "disney-plus-f7c0c.firebaseapp.com",
    projectId: "disney-plus-f7c0c",
    storageBucket: "disney-plus-f7c0c.appspot.com",
    messagingSenderId: "492786578856",
    appId: "1:492786578856:web:96d5aa16cd15d5afba599d",
    measurementId: "G-35RQLZN2RD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {auth,provider,storage};
export default db;
