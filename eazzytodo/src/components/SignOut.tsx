/** @jsxImportSource theme-ui */

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { ThemeProvider,
    Box,
    Flex,
    Image,
    Button,
    Input,    
    Paragraph,
    Heading,
    } from 'theme-ui';  

import { btnPrimary } from '.././styles/settings';
    
    
    firebase.initializeApp({
        apiKey: "AIzaSyDNbdVmZVmzNzEWw_eqHT6jMLeAa788Rgk",
        authDomain: "eazzy-todo.firebaseapp.com",
        projectId: "eazzy-todo",
        storageBucket: "eazzy-todo.appspot.com",
        messagingSenderId: "461379999354",
        appId: "1:461379999354:web:0b5aad7eaa090b4fb34dc3",
        measurementId: "G-8M0LZN0HLX"
      })
      
      const auth = firebase.auth();
      const firestore = firebase.firestore();
      // const analytics = firebase.analytics();

function SignOut() {
    return auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()} >Sign Out</Button>
    )
  }