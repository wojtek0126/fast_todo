/** @jsxImportSource theme-ui */
import './App.css';
import {  RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';
import { Box, Flex, Heading, Paragraph, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import ScrollText from 'react-scroll-text';
import Typist from 'react-typist';
import 'firebase/firestore';
import 'firebase/auth';
import getFirebase from './firebase/firebase';
import { appContainer, bigTitleTxt, copyrightTxt, headerContainer, signInFormContainer, signLogContainer, smallTitleTxt, titleContainer, waveEffectContainer } from './styles/elements';
import { useEffect, useState } from 'react';
import SignUpForm from './components/UserAuth/SignUpForm';
import SignInForm from './components/UserAuth/SignInForm';
import { txtTitleBigEng, txtTitleSmallEng } from './content/content';
import { Header } from 'semantic-ui-react';
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
      <Box sx={appContainer} >
      <Flex sx={titleContainer}><Paragraph>The</Paragraph><Paragraph sx={{
              color: 'text3'
            }}>Eazzy</Paragraph><Paragraph sx={{
              color: 'text4'
            }}>Todo</Paragraph>
            <Paragraph  sx={copyrightTxt}>© 2021 HFM</Paragraph>            
            </Flex>

        <Header sx={headerContainer} >          

        <Box sx={{margin: 'auto'}}>     

            {currentUser ? <TodoList /> : <>
                <Flex sx={signInFormContainer}>
                
                  <Flex sx={signLogContainer}>
                    <SignUpForm />
                    <SignInForm /> 
                  </Flex>                                   
              </Flex>
              <Box sx={waveEffectContainer}>
                 
              </Box> 
              <Box sx={{position: 'absolute', bottom: 0, opacity: 0.6}}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" 
             d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,266.7C840,288,
             960,288,1080,240C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,
             320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
              </Box>           
              <Typist>
                <Paragraph sx={smallTitleTxt}>{txtTitleSmallEng}</Paragraph>                  
              </Typist>
              <ScrollText><Heading sx={bigTitleTxt}>{txtTitleBigEng}</Heading></ScrollText>  
         </>}

         </Box>

        </Header>
      </Box>
      </RecoilRoot>
      </ThemeProvider>  
  );
}


export default App;
