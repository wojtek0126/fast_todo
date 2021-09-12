/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';    

import { auth } from '../firebase/firebase';   
import 'firebase/firestore';
import 'firebase/auth';
import { btnLogOut } from '../styles/elements';
import { iconSignOutBtn } from '../content/icons';
require('firebase/auth');       


function SignOut() {
    return auth.currentUser && (
      <Button sx={btnLogOut} onClick={() => auth.signOut()} >{iconSignOutBtn}</Button>
    )
  }

  export default SignOut;