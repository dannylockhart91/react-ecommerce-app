import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQ7aSazKwf7AySn5BSB5qmppZV2Gb5tdg",
    authDomain: "e-commerce-react-app-c3cef.firebaseapp.com",
    databaseURL: "https://e-commerce-react-app-c3cef.firebaseio.com",
    projectId: "e-commerce-react-app-c3cef",
    storageBucket: "e-commerce-react-app-c3cef.appspot.com",
    messagingSenderId: "364020166000",
    appId: "1:364020166000:web:3d6a12017ca05a58ae73b5",
    measurementId: "G-KM4FG63YJ2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/*
Google Authentication Utils
 */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
