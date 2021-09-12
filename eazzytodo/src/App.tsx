/** @jsxImportSource theme-ui */
import './App.css';

// recoil ready for filters and search
import {  RecoilRoot } from 'recoil';

import SignIn from './components/SignIn';
import TodoList from './components/TodoList';
import { ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import { useAuthState } from 'react-firebase-hooks/auth';

import 'firebase/firestore';
import 'firebase/auth';
import { auth } from './firebase/firebase';
import { appContainer, headerContainer } from './styles/elements';
require('firebase/auth');


function App() {

  const [user] = useAuthState(auth);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>    
      <div sx={appContainer} >
        <header sx={headerContainer} >

        <section>
            {user ? <TodoList /> : <SignIn />}
          </section>

        </header>
      </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}


export default App;
