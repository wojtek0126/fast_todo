/** @jsxImportSource theme-ui */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import ScrollTop from "react-scrolltop-button";

import { ThemeProvider,
    Box,
    Flex,
    Image,
    Button,
    Input,    
    Paragraph,
    Heading,
    } from 'theme-ui';   

    function ChatRoom() {
        const dummy = useRef();
        const messagesRef = firestore.collection('messages');
        const query = messagesRef.orderBy('createdAt').limit(100);
      
        const [messages] = useCollectionData(query, { idField: 'id' });
      
        const [formValue, setFormValue] = useState('');
      
      
        const sendMessage = async (e) => {
          e.preventDefault();
      
          const { uid, photoURL } = auth.currentUser;
      
          await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
          })
      
          setFormValue('');
          dummy.current.scrollIntoView({ behavior: 'smooth' });
        }
      
        return (<> 
          <Flex id={'main'} sx={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: '2',
            opacity: '0.85',     
          }}>
            
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      
            <span ref={dummy}></span>
      
          </Flex>  
          <form className='form' onSubmit={sendMessage} >
            <Flex  sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 100,
              marginTop: '3',        
              position: 'fixed',
              left: 0,
              bottom: 0   
            }}>
              <Input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="your message..." 
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
               <Flex sx={{        
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
          </Flex>
         
            </Flex>
          </form>    
          <ScrollTop
              text="^"
              distance={0}
              breakpoint={0}
              style={{
                backgroundImage:'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
                cursor: 'pointer',
                margin: '10px',  
                border: 'none',         
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
               position: 'fixed',
               bottom: 12,
               left: 0,     
               zIndex: '15',
               height: 50
              }}
              className="scroll-your-role"
              speed={1000}
              target={75}
              icon={<BsArrowBarUp />}
            />
        </>)
      }    