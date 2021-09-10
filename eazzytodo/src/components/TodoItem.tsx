/** @jsxImportSource theme-ui */

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// import TextAnimation from 'react-animate-text';

import { ThemeProvider,
    Box,
    Flex,
    Image,
    Button,
    Input,    
    Paragraph,
    Heading,
    } from 'theme-ui';   

    // type AppProps = {
    //     text: string;
    //     uid: string;
    //     photoURL: string;
    //   };

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDNbdVmZVmzNzEWw_eqHT6jMLeAa788Rgk",
        authDomain: "eazzy-todo.firebaseapp.com",
        projectId: "eazzy-todo",
        storageBucket: "eazzy-todo.appspot.com",
        messagingSenderId: "461379999354",
        appId: "1:461379999354:web:0b5aad7eaa090b4fb34dc3",
        measurementId: "G-8M0LZN0HLX"
      });
  }

      // firebase.initializeApp({
      //   apiKey: "AIzaSyDNbdVmZVmzNzEWw_eqHT6jMLeAa788Rgk",
      //   authDomain: "eazzy-todo.firebaseapp.com",
      //   projectId: "eazzy-todo",
      //   storageBucket: "eazzy-todo.appspot.com",
      //   messagingSenderId: "461379999354",
      //   appId: "1:461379999354:web:0b5aad7eaa090b4fb34dc3",
      //   measurementId: "G-8M0LZN0HLX"
      // })
      
      const auth = firebase.auth();
      const firestore = firebase.firestore();
      // const analytics = firebase.analytics();

      type AppProps = {
        message: any;     
      };

    //   export interface Msg {
    //     text: string;
    //     uid: string;
    //     photoURL: string;
    //   }

function TodoItem(props: AppProps) {  
    const { text, uid, photoURL }: any = props.message;
  
    const messageClass = uid === auth.currentUser!.uid ? 'sent' : 'received';
  
    return (<>  
      <div sx={{
          display: 'flex',
          borderRadius: '10px',
          backgroundColor: `${messageClass}`,
          color: 'messageText',
          width: '80vw',
          wordBreak: 'break-word',
          position: 'relative',    
          margin: '30px',
          padding: '2', 
          marginBottom: '70px' 
        }}>
        <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} sx={{
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          position: 'absolute',
          left: '-25px',
          top: '-20px'
        }} />
        <p>{text}</p>
      </div>
    </>)
  }

  export default TodoItem;