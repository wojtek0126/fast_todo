/** @jsxImportSource theme-ui */
import './App.css';
import SignIn from './components/SignIn';
import TodoList from './components/TodoList';
import { ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import { useAuthState } from 'react-firebase-hooks/auth';

import 'firebase/firestore';
import 'firebase/auth';
import { auth } from './firebase/firebase';
require('firebase/auth');


function App() {

  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={theme}>    
    <div className="App">
      <header className="App-header">

      <section>
          {user ? <TodoList /> : <SignIn />}
        </section>

      </header>
    </div>
    </ThemeProvider>
  );
}


export default App;
