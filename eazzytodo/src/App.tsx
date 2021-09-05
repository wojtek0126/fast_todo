/** @jsxImportSource theme-ui */

import React, { useRef, useState } from 'react';

import './App.css';

import SignIn from './components/SignIn';'./components/SignIn';
import TodoList from './components/SignIn';'./components/TodoList';


import { ThemeProvider } from 'theme-ui';
import { theme } from './styles/theme';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      <section>
          {user ? <TodoList /> : <SignIn />}
        </section>
        
      </header>
    </div>
  );
}


export default App;
