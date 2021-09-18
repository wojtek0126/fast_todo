/** @jsxImportSource theme-ui */
import './App.css';

import SignIn from './components/SignIn';
import TodoList from './components/TodoList';
import { Flex, Paragraph, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';

import styled from "styled-components";

import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/firestore';
import 'firebase/auth';
import getFirebase, { auth } from './firebase/firebase';
import { appContainer, headerContainer, smallTitleTxt } from './styles/elements';
import { useEffect, useState } from 'react';
import SignUpForm from './components/UserAuth/SignUpForm';
import SignInForm from './components/UserAuth/SignInForm';
import SignOutButton from './components/UserAuth/SignOutButton';
require('firebase/auth');


function App() {

  const [user] = useAuthState(auth);
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
      <div sx={appContainer} >
        <header sx={headerContainer} >
          

        <section>     

            {currentUser ? <TodoList /> : <>
                <Flex>
                  <Flex sx={{color: 'text2'}}>
                    {currentUser
                      ? `The current logged in user is: ${currentUser}.`
                      : "No user is currently logged in."}
                  </Flex>
                <SignUpForm />
                <SignInForm />
                {/* <SignOutButton /> */}
              </Flex>
         </>}

         </section>

        </header>
      </div>
      </ThemeProvider>  
  );
}


export default App;
