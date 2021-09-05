/** @jsxImportSource theme-ui */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import TextAnimation from 'react-animate-text';

import { ThemeProvider,
    Box,
    Flex,
    Image,
    Button,
    Input,    
    Paragraph,
    Heading,
    } from 'theme-ui';   

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>  
      <Flex sx={{
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
      </Flex>
    </>)
  }