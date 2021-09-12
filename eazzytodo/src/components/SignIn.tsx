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
import { txtTitleBigEng, txtTitleSmallEng } from '../content/content';
import { iconSignInBtn } from '../content/icons';
require('firebase/auth');


function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>   
        <Box sx={btnContainer}>
            <Button sx={btnPrimary} onClick={signInWithGoogle} >{iconSignInBtn}</Button>
        </Box>     
          <Paragraph sx={smallTitleTxt}>{txtTitleSmallEng}</Paragraph>
        <Heading sx={bigTitleTxt}>{txtTitleBigEng}</Heading>  
      </>
    )
  
  }

  export default SignIn;