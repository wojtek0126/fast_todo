
import { useState } from "react";
import { iconSignInBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignInForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordlValue, setPasswordValue] = useState("");

  const [alertDisplay, setAlertDiaspaly] = useState('none');
  const [alertContent, setAlerContent] = useState("");

  
  const handleChangeEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPasswordValue(event.target.value);
  };  
 
  const firebaseInstance = getFirebase();
  const email = emailValue;
  const password = passwordlValue;

  const signIn = async (event: any) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log("user", user);     
      }
    } catch (error: any) {
      console.log("error", error);
      setAlertDiaspaly('flex');
      setAlerContent(`${error.message}`);
      setTimeout(() => {
        setAlertDiaspaly('none');
      }, 2000);
    }
  };

  return (<>
    <PropsySignLogForm 
        textHead={'Log in'}
        buttonContent={iconSignInBtn}
        emailInputTxt={email}
        passInputTxt={password}
        onChangeEmail={handleChangeEmail}
        onChangePass ={handleChangePassword}
        onSubmit={signIn}
        margin={2}
    />
    <PropsyAlertBox display={alertDisplay}
                    content={alertContent}
    />
  </>);
};

export default SignInForm;


