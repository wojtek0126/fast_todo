/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';    

import { auth } from '../firebase/firebase';   
import 'firebase/firestore';
import 'firebase/auth';
import { btnPrimary } from '../styles/elements';
require('firebase/auth');       


function SignOut() {
    return auth.currentUser && (
      <Button sx={btnPrimary} onClick={() => auth.signOut()} >Sign Out</Button>
    )
  }

  export default SignOut;