import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBZHFa2ugn6q6PumE5yNH4VvX0qYHuQMk8",
    authDomain: "web-gallery-5535d.firebaseapp.com",
    projectId: "web-gallery-5535d",
    storageBucket: "web-gallery-5535d.appspot.com",
    messagingSenderId: "969569083637",
    appId: "1:969569083637:web:223717f13578ddbbd8a5bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };