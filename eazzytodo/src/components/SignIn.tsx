/** @jsxImportSource theme-ui */

import { 
    Button,    
    Paragraph,
    Heading,
    Box,
    Flex
    } from 'theme-ui'; 

import React, { useState, useEffect } from "react";
    
import { Wave as WaveTxt } from 'react-animated-text';
import Wave from 'react-wavify';

import styled from "styled-components";
import SignUpForm from "../components/UserAuth/SignUpForm";

import SignInForm from "../components/UserAuth/SignInForm";
import SignOutButton from "../components/UserAuth/SignOutButton";

import { auth } from '../firebase/firebase';    
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import getFirebase from "../firebase/firebase";
import { bigTitleTxt, btnContainer, btnPrimary, signInContainer, smallTitleTxt, waveEffectContainer } from '../styles/elements';
import { txtTitleBigEng, txtTitleSmallEng } from '../content/content';
import { iconSignInBtn } from '../content/icons';
require('firebase/auth');






function SignIn() {
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const firebase = getFirebase();

  //   if (firebase) {
  //     firebase.auth().onAuthStateChanged((authUser: any) => {
  //       if (authUser) {
  //         setCurrentUser(authUser.email);
  //       } else {
  //         setCurrentUser(null);
  //       }
  //     });
  //   }
  // }, []);

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    // async function authenticateUser(email: string, password: string, isLogin: boolean) {
    //   try {
    //     const user = isLogin
    //       ? await auth.signInWithEmailAndPassword(email, password)
    //       : await auth.createUserWithEmailAndPassword(email, password);
    //     console.log(user);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  
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