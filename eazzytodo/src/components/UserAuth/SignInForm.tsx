
import { useState } from "react";
import { useRecoilState } from "recoil";

import { iconAddUser, iconSignInBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import { displayState } from "../../recoil/recoil";
import { btnGradient, btnSecondGradient } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignInForm = () => {

  const [emailValue, setEmailValue] = useState("");
  const [passwordlValue, setPasswordValue] = useState("");

  const [alertDisplay, setAlertDiaspaly] = useState('none');
  const [alertContent, setAlerContent] = useState("");
  
  const [recoilDisplay, setRecoilDisplay] = useRecoilState(displayState);

  const [ btnSignupColor, setBtnSignupColor ] = useState(btnGradient);

  const [ opacity1, setOpacity1 ] = useState(1);


  const handleEnableDisableSignUp = () => {
    if (recoilDisplay === 'none') {
      setRecoilDisplay('flex');
      setBtnSignupColor(btnSecondGradient);
      setOpacity1(0.5);
    }
    else {
      setRecoilDisplay('none');
      setBtnSignupColor(btnGradient);
      setOpacity1(1);

    }
  }
  
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
          localStorage.setItem('userEmail', email);          
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
        transition={'2s'}
        opacity={opacity1}
        textHead={'Log in'}
        buttonContent={iconSignInBtn}
        emailInputTxt={emailValue}
        passInputTxt={passwordlValue}
        onChangeEmail={handleChangeEmail}
        onChangePass ={handleChangePassword}
        onSubmit={signIn}
        margin={2}
        extraContent={
        <PropsyBtn background={btnSignupColor}
                   content={iconAddUser}
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


