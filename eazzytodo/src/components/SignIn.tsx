/** @jsxImportSource theme-ui */

import { 
    Button,    
    Paragraph,
    Heading,
    Box,
    } from 'theme-ui';   

import { auth } from '../firebase/firebase';    
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { bigTitleTxt, btnContainer, btnPrimary, smallTitleTxt } from '../styles/elements';
import { txtSignInGoogleEng, txtTitleBigEng, txtTitleSmallEng } from '../content/content';
require('firebase/auth');


function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>   
        <Box sx={btnContainer}>
            <Button sx={btnPrimary} onClick={signInWithGoogle} >{txtSignInGoogleEng}</Button>
        </Box>     
          <Paragraph sx={smallTitleTxt}>{txtTitleSmallEng}</Paragraph>
        <Heading sx={bigTitleTxt}>{txtTitleBigEng}</Heading>  
      </>
    )
  
  }

  export default SignIn;