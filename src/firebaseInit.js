import firebase from 'firebase';
// Initialize Cloud Firestore through Firebase


firebase.initializeApp({
    apiKey: "AIzaSyAI9MlV_5bqEehjH5ez2zeVQHJjKJADqqA",
    authDomain: "todo-57755.firebaseapp.com",
    databaseURL: "https://todo-57755.firebaseio.com",
    projectId: "todo-57755",
    storageBucket: "todo-57755.appspot.com",
    messagingSenderId: "495181316287",
    appId: "1:495181316287:web:ab5ff1e95bbdaf5563c60a"
});

let db = firebase.firestore();

export default db;