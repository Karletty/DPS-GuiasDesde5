import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDx585QW2SqQmBl_0-GwzbrNmWvvL0Gbfg",
     authDomain: "colectores-15d6b.firebaseapp.com",
     projectId: "colectores-15d6b",
     storageBucket: "colectores-15d6b.appspot.com",
     messagingSenderId: "491372679354",
     appId: "1:491372679354:web:ceb4870bc236da71ee7283"
};

if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
}

export default firebase;