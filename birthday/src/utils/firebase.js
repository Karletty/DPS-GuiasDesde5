// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCgZJowwXCFMl7DymdbEPUAQuxYQ-Sg8Pw",
     authDomain: "birthday-30b6c.firebaseapp.com",
     projectId: "birthday-30b6c",
     storageBucket: "birthday-30b6c.appspot.com",
     messagingSenderId: "735112794448",
     appId: "1:735112794448:web:d95d99c4d5bacf1a615c55"
};

// Initialize Firebase
if (!firebase.apps.length)
     firebase.initializeApp(firebaseConfig);

export default firebase;