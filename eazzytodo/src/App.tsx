/** @jsxImportSource theme-ui */
import './App.css';

import { useEffect, useState } from 'react';

import { txtTitleBigEng, txtTitleSmallEng } from './content/content';

import { Header } from 'semantic-ui-react';

import TitleBanner from './components/propsyComps/TitleBanner';

import { appContainer,
  bigTitleTxt,
  btnGradient,
  clickedBtnAnimShrink,
  headerContainer, 
  signInFormContainer, 
  signLogContainer, 
  smallTitleTxt, 
  waveEffectContainer } from './styles/elements';

import { RecoilRoot } from 'recoil';

import TodoList from './components/TodoList';

import { Box, Flex, ThemeProvider } from 'theme-ui';
import { theme, themeRetro } from './styles/theme';

import ScrollText from 'react-scroll-text';

import 'firebase/firestore';
import 'firebase/auth';
import getFirebase from './firebase/firebase';
import SignUpForm from './components/UserAuth/SignUpForm';
import SignInForm from './components/UserAuth/SignInForm';
import PropsyBtn from './components/propsyComps/PropsyBtn';
import { iconRetroModeBtn } from './content/icons';
import { handleButtonAnimation } from './components/UserAuth/SignOutButton';
import React from 'react';
import { User } from 'firebase';
import TypistText from './components/propsyComps/TypistText';
import ParticleBackground from './components/propsyComps/ParticleBackground';
require('firebase/auth');

export const AuthContext = React.createContext<firebase.User | null>(null);

function App() {

  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  const [themeUI, setThemeUI] = useState(theme);
  
  const [animBtn1, setAnimBtn1] = useState("");
   
  
  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser: { email: React.SetStateAction<User | null>; }) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  const handleThemeSwitchClick = () => {
    handleButtonAnimation(setAnimBtn1, clickedBtnAnimShrink, 1000);   
    if (themeUI === theme) {
      setThemeUI(themeRetro);      
    }
    else if (themeUI === themeRetro) {
      setThemeUI(theme);
    }
  };


  return (  
      <ThemeProvider theme={themeUI}>    
      <RecoilRoot>
      <Box sx={appContainer} >
      <ParticleBackground />
        <TitleBanner />
        <PropsyBtn 
          onClick={handleThemeSwitchClick}
          tooltipId={'set-theme'}
          tooltipTxt={'enable/disable retro mode'}
          background={btnGradient}
          content={iconRetroModeBtn}
          position={"absolute"}
          top={10}
          color={'text2'}
          animation={animBtn1} 
          animTime={'1s'} 
        />
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
                <TypistText typistText={txtTitleSmallEng} typistStyle={smallTitleTxt} />                
                <ScrollText sx={bigTitleTxt}>{txtTitleBigEng}</ScrollText>  
          </>}
          </Box>
        </Header>
      </Box>
      </RecoilRoot>
      </ThemeProvider>  
  );
}


export default App;
