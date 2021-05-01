import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQ4fIZwBGf23q1-qg3iTRVrk6KUvFOZnQ",
    authDomain: "fbbysami.firebaseapp.com",
    projectId: "fbbysami",
    storageBucket: "fbbysami.appspot.com",
    messagingSenderId: "356058910075",
    appId: "1:356058910075:web:e5cee8391db3686b0941de",
    measurementId: "G-C9QX6WNXF6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // Start a sign in process for an unauthenticated user.

export { auth, provider };
export default db;
