import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth');


export const config = {
    apiKey: "AIzaSyDNbdVmZVmzNzEWw_eqHT6jMLeAa788Rgk",
    authDomain: "eazzy-todo.firebaseapp.com",
    projectId: "eazzy-todo",
    storageBucket: "eazzy-todo.appspot.com",
    messagingSenderId: "461379999354",
    appId: "1:461379999354:web:0b5aad7eaa090b4fb34dc3",
    measurementId: "G-8M0LZN0HLX"
    };

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();    

export const auth = firebase.auth();
export const firestore = firebase.firestore();  



