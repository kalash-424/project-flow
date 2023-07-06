import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCVnVclVfgnMGZ25YnDRioyPMcO-WoYLGw",
    authDomain: "projectmanager-2e7e8.firebaseapp.com",
    projectId: "projectmanager-2e7e8",
    storageBucket: "projectmanager-2e7e8.appspot.com",
    messagingSenderId: "1097515611504",
    appId: "1:1097515611504:web:7ee5cf7b8074d91e820bb5"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projStorage, timestamp}