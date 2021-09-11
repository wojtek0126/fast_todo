/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';    

import { config } from '../firebase/firebase';   
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth'); 
      
const auth = firebase.auth();
const firestore = firebase.firestore();

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


function SignOut() {
    return auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()} >Sign Out</Button>
    )
  }

  export default SignOut;