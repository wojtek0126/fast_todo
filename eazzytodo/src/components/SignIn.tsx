/** @jsxImportSource theme-ui */

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// import ScrollText from 'react-scroll-text';

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

// import firebase from 'firebase'
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth')




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

function SignIn() {

    const [user] = useAuthState(auth);


    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>          
        <Button className="sign-in" onClick={signInWithGoogle} >Sign in with Google</Button>
          <Paragraph sx={{
            color: 'text2',
            fontWeight: '600',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginTop: 20,
            marginBottom: 20 
            }}>Welcome to my personal chat. Happy chat</Paragraph>
        <Heading sx={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              color: 'text2',
              marginTop: 80,
              marginBottom: 20,
              fontSize: '40px'      
              }}> 
                {/* <ScrollText> */}
                  This is my personal chat made with React.js and several of it's libraries. Feel free to sign in and type in whatever You want.
                  This app is evolving so next time around it will most likely look and work different. Also the code and file structure
                  will be improved. Right now this chat is free for anyone to test, however maximum number of comments is currently
                  set to 50...have fun!                 
                {/* </ScrollText>          */}
            </Heading>  
      </>
    )
  
  }

  export default SignIn;