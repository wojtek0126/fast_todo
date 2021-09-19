/** @jsxImportSource theme-ui */
import './App.css';
// all ok for recoil
import {  RecoilRoot } from 'recoil';

import TodoList from './components/TodoList';
import { Box, Flex, Heading, Paragraph, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';

import { Wave as WaveTxt } from 'react-animated-text';
import Wave from 'react-wavify';
import 'firebase/firestore';
import 'firebase/auth';
import getFirebase, { auth } from './firebase/firebase';
import { appContainer, bigTitleTxt, headerContainer, signInFormContainer, signLogContainer, smallTitleTxt, waveEffectContainer } from './styles/elements';
import { useEffect, useState } from 'react';
import SignUpForm from './components/UserAuth/SignUpForm';
import SignInForm from './components/UserAuth/SignInForm';
import { txtTitleBigEng, txtTitleSmallEng } from './content/content';
import { recoilUser } from './recoil/recoil';
require('firebase/auth');


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser: any) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  return (  
      <ThemeProvider theme={theme}>    
      <RecoilRoot>
      <div sx={appContainer} >
        <header sx={headerContainer} >
          

        <section>     

            {currentUser ? <TodoList /> : <>
                <Flex sx={signInFormContainer}>
                  {/* <Flex sx={{color: 'text2'}}>
                    {currentUser
                      ? `The current logged in user is: ${currentUser}.`
                      : "No user is currently logged in."}
                  </Flex> */}
                  <Flex sx={signLogContainer}>
                    <SignUpForm />
                    <SignInForm /> 
                  </Flex>                                   
              </Flex>
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
                <Paragraph sx={smallTitleTxt}><WaveTxt text={txtTitleSmallEng} effect="stretch" effectChange={2.2}/></Paragraph>
                <Heading sx={bigTitleTxt}><WaveTxt text={txtTitleBigEng} effect="stretch" effectChange={2.2}/></Heading>  
         </>}

         </section>

        </header>
      </div>
      </RecoilRoot>
      </ThemeProvider>  
  );
}


export default App;
