/** @jsxImportSource theme-ui */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import TextAnimation from 'react-animate-text';

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>          
        <Button className="sign-in" onClick={signInWithGoogle} sx={btnPrimary}>Sign in with Google</Button>
        <TextAnimation>
          <Paragraph sx={{
            color: 'text2',
            fontWeight: '600',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginTop: 20,
            marginBottom: 20 
            }}>Welcome to my personal chat. Happy chat</Paragraph>
        </TextAnimation>
        <Heading sx={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              color: 'text2',
              marginTop: 80,
              marginBottom: 20,
              fontSize: '40px'      
              }}> 
                <ScrollText>
                  This is my personal chat made with React.js and several of it's libraries. Feel free to sign in and type in whatever You want.
                  This app is evolving so next time around it will most likely look and work different. Also the code and file structure
                  will be improved. Right now this chat is free for anyone to test, however maximum number of comments is currently
                  set to 50...have fun!                 
                </ScrollText>         
            </Heading>  
      </>
    )
  
  }

  export default SignIn;