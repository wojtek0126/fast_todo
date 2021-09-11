/** @jsxImportSource theme-ui */

import { useAuthState } from 'react-firebase-hooks/auth';
import { 
    Button,    
    Paragraph,
    Heading,
    } from 'theme-ui';   

import { config } from '../firebase/firebase';    
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth');

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  
const auth = firebase.auth();
const firestore = firebase.firestore();




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
            }}>Welcome to my personal Todo list. Happy chat</Paragraph>
        <Heading sx={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              color: 'text2',
              marginTop: 80,
              marginBottom: 20,
              fontSize: '40px'      
              }}> 
                {/* <ScrollText> */}
                  This is my personal todo list app made with React.js and several of it's libraries. Feel free to sign in, assign Yourself some
                  task and of course try to make it done.
                  This app is evolving so next time around it will most likely look and work different. Also the code and file structure
                  will be improved. Right now this todo list is free for anyone to test, however maximum number of tasks is currently
                  set to 50...have fun!                 
                {/* </ScrollText>          */}
            </Heading>  
      </>
    )
  
  }

  export default SignIn;