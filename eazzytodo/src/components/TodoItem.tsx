/** @jsxImportSource theme-ui */
import { Image } from 'theme-ui';   

import { config } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth');
      
const auth = firebase.auth();

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


type AppProps = {
  message: any;     
};
 

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