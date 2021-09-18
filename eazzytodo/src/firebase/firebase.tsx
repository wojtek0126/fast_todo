import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth');

type FireConfig = {
    [key: string]: string;
  };

export const config: FireConfig = {
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

let instance: any;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    if (!firebase.apps.length) {
        instance = firebase.initializeApp(config);
     }else {
        instance = firebase.app(); 
     }
    return instance;
  }

  return null;
}

// if (!firebase.apps.length) {
//     instance = firebase.initializeApp(config);
//  }else {
//     instance = firebase.app(); // if already initialized, use that one
//  }

