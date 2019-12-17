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
export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/*
Google Authentication Utils
 */
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

/**
 * Function called when the App.tsx component mounts. Checks to see if there is currently a user
 * existing within the firestore database relating to the current logged in user. If not, create
 * user document in the 'users' collection.
 * @param userAuthObject The Object returned from 'firestore.auth.onAuthStateChange()'
 * @param additionalData Optional information to pass to the user object
 */
export const createUserProfileDocument = async (userAuthObject: any, additionalData?: any) => {
    if (!userAuthObject) return;

    const userRef = firestore.doc(`users/${userAuthObject.uid}`);
    const userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {
        const { displayName, email } = userAuthObject;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth: any) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

/**
 * Utility function to transform the data currently stored in the firebase database to a usable
 * format for the application
 * @param collections {firebase.firestore.QuerySnapshot} The snapshot from the firestore database
 */
export const convertCollectionSnapshotToMap = ((collections: firebase.firestore.QuerySnapshot) => {
    const transformedCollections = collections.docs.map((document: any) => {
        const { title, items } = document.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: document.id,
            title,
            items
        };
    });
    return transformedCollections.reduce((accumulator: any, collection: any) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
});

export const addCollectionAndDocuments = async (collectionKeyName: string, objectsToAdd: any) => {
    const collectionRef = firestore.collection(collectionKeyName);

    const batchCall = firestore.batch();
    objectsToAdd.forEach((object: any) => {
        const newDocRef = collectionRef.doc();
        batchCall.set(newDocRef, object);
    });
    return await batchCall.commit();
};
