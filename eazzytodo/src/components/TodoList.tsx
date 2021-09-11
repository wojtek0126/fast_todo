/** @jsxImportSource theme-ui */
import { 
  Button,
  Input 
  } from 'theme-ui';  

import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem from './TodoItem';

import { useRef, useState } from 'react';

import { config } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
require('firebase/auth');
      
const auth = firebase.auth();
const firestore = firebase.firestore();  

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

    

function TodoList() {
    const dummy = useRef<null | HTMLDivElement>(null); 
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(100);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e: any) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser!;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy!.current!.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<> 
          <div id={'main'} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: '2',
            opacity: '0.85',     
          }}>
            
            {messages && messages.map(msg => <TodoItem key={msg.id} message={msg} />)}
      
            <span ref={dummy}></span>
      
          </div>  
          <form className='form' onSubmit={sendMessage} >
            <div  sx={{
              display: 'flex',  
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 100,
              marginTop: '3',        
              position: 'fixed',
              left: 0,
              bottom: 0   
            }}>
              <Input value={formValue} onChange={(e: any) => setFormValue(e.target.value)} placeholder="your message..." 
              sx={{
                backgroundColor: 'inputBackground',
                margin: '20px',
                marginTop: '30px',
                borderRadius: '10px',
                marginLeft: 77,
                "@media (max-width: 500px)": { 
                  width: '70vw',     
                  marginLeft: 50,
                  marginRight: 50,
                  height: 50,
                  marginBottom: 26           
               }
              }}
              />
               <div sx={{  
                   display: 'flex',        
          }}> 
                 <Button type="submit" disabled={!formValue}
              sx={{
                backgroundImage:'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
                cursor: 'pointer',
                margin: '10px',
                padding: '15px 45px',
                textAlign: 'center',
                textTransform: 'uppercase',
                transition: '0.5s',
                backgroundSize: '200% auto',
                color: 'white',            
                boxShadow: '0 0 20px #eee',
                borderRadius: '10px',      
                '&:hover, &:focus': {  
                  backgroundPosition: 'right center', 
                  color: '#fff',
                  textDecoration: 'none'
               },
               paddingRight: 60,
               marginRight: 67,
               "@media (max-width: 500px)": { 
                 position: 'absolute',         
                 marginRight: 4,
                 right: -25,
                 bottom: 12,
                 padding: 15,
                 height: 50
              }
              }}
              >🕊️</Button>
          </div>
         
            </div>
          </form>            
        </>)
  }  
      
export default TodoList;      