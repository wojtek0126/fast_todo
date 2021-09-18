/** @jsxImportSource theme-ui */

import { 
    Button,    
    Paragraph,
    Heading,
    Box,
    Flex
    } from 'theme-ui'; 
    
import { Wave as WaveTxt } from 'react-animated-text';
import Wave from 'react-wavify';

import { auth } from '../firebase/firebase';    
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { bigTitleTxt, btnContainer, btnPrimary, signInContainer, smallTitleTxt, waveEffectContainer } from '../styles/elements';
import { txtTitleBigEng, txtTitleSmallEng } from '../content/content';
import { iconSignInBtn } from '../content/icons';
require('firebase/auth');


function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

  
    return (
      <Flex sx={signInContainer}>   
        <Box sx={waveEffectContainer}>
          <Wave mask="url(#mask)" fill="#1277b0" >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
              </mask>
            </defs>
          </Wave> 
        </Box>          
        <Box sx={btnContainer}>
            <Button sx={btnPrimary} onClick={signInWithGoogle} >{iconSignInBtn}</Button>
        </Box>   
        <Paragraph sx={smallTitleTxt}><WaveTxt text={txtTitleSmallEng} effect="stretch" effectChange={2.2}/></Paragraph>
        <Heading sx={bigTitleTxt}><WaveTxt text={txtTitleBigEng} effect="stretch" effectChange={2.2}/></Heading>             
      </Flex>
    )
  
  }

  export default SignIn;