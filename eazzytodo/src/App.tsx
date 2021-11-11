/** @jsxImportSource theme-ui */
import './App.css';

import { useEffect, useState } from 'react';

import { txtTitleBigEng, txtTitleSmallEng } from './content/content';

import { Header } from 'semantic-ui-react';

import TitleBanner from './components/propsyComps/TitleBanner';

import Particles from 'react-particles-js';

import { appContainer,
  bigTitleTxt,
  btnGradient,
  clickedBtnAnimShrink,
  headerContainer, 
  signInFormContainer, 
  signLogContainer, 
  smallTitleTxt, 
  waveEffectContainer } from './styles/elements';

import {  RecoilRoot } from 'recoil';

import TodoList from './components/TodoList';

import { Box, Flex, Heading, Paragraph, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import retroTheme from './styles/themeRetro';

import ScrollText from 'react-scroll-text';
import Typist from 'react-typist';

import 'firebase/firestore';
import 'firebase/auth';
import getFirebase from './firebase/firebase';
import SignUpForm from './components/UserAuth/SignUpForm';
import SignInForm from './components/UserAuth/SignInForm';
import themeRetro from './styles/themeRetro';
import PropsyBtn from './components/propsyComps/PropsyBtn';
import { iconRetroModeBtn } from './content/icons';
import { handleButtonAnimation } from './components/UserAuth/SignOutButton';
import React from 'react';
import { User } from 'firebase';
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
      // setThemeBtnColor('gold');
    }
    else if (themeUI === themeRetro) {
      setThemeUI(theme);
      // setThemeBtnColor('grey');

    }
  };


  return (  
      <ThemeProvider theme={themeUI}>    
      <RecoilRoot>
      <Box sx={appContainer} >
      <Particles style={{position: 'absolute'}}
       params={{
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 12,
                "random": true,
                "anim": {
                    "speed": 2,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }} />
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
                <Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }}>
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
