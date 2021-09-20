
import { useState } from "react";
import { useRecoilState } from "recoil";

import { iconSignInBtn, iconSignUpBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import { displayState, recoilUser } from "../../recoil/recoil";
import { btnGradient, btnPrimary } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignInForm = () => {

  const [emailValue, setEmailValue] = useState("");
  const [passwordlValue, setPasswordValue] = useState("");

  const [alertDisplay, setAlertDiaspaly] = useState('none');
  const [alertContent, setAlerContent] = useState("");

  const [recoilUserGet, setRecoilUserGet] = useRecoilState(recoilUser);
  const [recoilDisplay, setRecoilDisplay] = useRecoilState(displayState);


  const handleEnableDisableSignUp = () => {
    if (recoilDisplay === 'none') {
      setRecoilDisplay('flex');
    }
    else {
      setRecoilDisplay('none');
    }
  }
  
  const handleChangeEmail = (event: any) => {
    setEmailValue(event.target.value);
    // setRecoilUserGet(event.target.value);
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
          setRecoilUserGet(email);
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
        // display={'none'}
        textHead={'Log in'}
        buttonContent={iconSignInBtn}
        emailInputTxt={emailValue}
        passInputTxt={passwordlValue}
        onChangeEmail={handleChangeEmail}
        onChangePass ={handleChangePassword}
        onSubmit={signIn}
        margin={2}
        extraContent={
        <PropsyBtn background={btnGradient}
                   content={iconSignUpBtn}
                   type={'button'} 
                   onClick={handleEnableDisableSignUp}
        />
        }
    />
    <PropsyAlertBox display={alertDisplay}
                    content={alertContent}
    />
  </>);
};

export default SignInForm;


