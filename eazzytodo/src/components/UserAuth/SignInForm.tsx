
import { Link } from "@theme-ui/components";
import firebase from "firebase";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { iconAddUser, iconCloseBtn, iconForgotpassBtn, iconSignInBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import { displayAlertBoxState, displayLoginBoxState, displaySignupBoxState } from "../../recoil/recoil";
import { btnGradient } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignInForm = () => {

  const [emailValue, setEmailValue] = useState("");
  const [passwordlValue, setPasswordValue] = useState("");

  const [alertDisplay, setAlertDiaspaly] = useState('none');
  const [alertContent, setAlerContent] = useState("");

  const [forgotPasswordDisplay, setForgotPasswordDisplay] = useState('none');
  
  const setRecoilAlertBoxDisplay = useSetRecoilState(displayAlertBoxState);

  const [loginBoxDisplay, setLoginBoxDisplay] = useRecoilState(displayLoginBoxState);

  const setSignupBoxDisplay = useSetRecoilState(displaySignupBoxState);


  

  // const [ btnSignupColor, setBtnSignupColor ] = useState(btnGradient);
  // const [ btnSignupDisplay, setBtnSignupDisplay ] = useState("flex");


  // const [ opacity1, setOpacity1 ] = useState(1);


  const handleEnableDisableSignUp = () => {
    // if (recoilAlertBoxDisplay === 'none') {
      setRecoilAlertBoxDisplay('flex');
      // setBtnSignupColor(btnCheckedGradient);
      // setBtnSignupDisplay('none');
      setLoginBoxDisplay('none');
      setSignupBoxDisplay('flex');
    // }
    // else {
    //   setRecoilAlertBoxDisplay('none');
    //   setBtnSignupColor(btnGradient);
    //   setLoginBoxDisplay('flex');

    // }
  };
  
  const handleChangeEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPasswordValue(event.target.value);
  };  

  const handleForgotPassword = () => {
    setForgotPasswordDisplay('flex');
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordDisplay('none');
  };

  const handleForgotPasswordSend = () => {
    firebase.auth().sendPasswordResetEmail(emailValue);
    setTimeout(() => {
      setForgotPasswordDisplay('none');
    }, 2000);
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

  const ResetPasswordPopup = ({display, onClick, onClickClose}: any) => {
    return <PropsyAlertBox  display={display}  content={<> 
    <Link href="#!" sx={{color: 'text2', textDecoration: 'none'}} onClick={onClick} >
      send reset password request to email typed into login form</Link>
      <PropsyBtn content={iconCloseBtn} onClick={onClickClose} background={btnGradient} />
      </>} />
  };


  return (<>   
    <PropsySignLogForm 
        transition={'2s'}
        display={loginBoxDisplay}
        textHead={'Log in'}
        buttonContent={iconSignInBtn}
        emailInputTxt={emailValue}
        passInputTxt={passwordlValue}
        onChangeEmail={handleChangeEmail}
        onChangePass ={handleChangePassword}
        onSubmit={signIn}
        margin={2}
        extraContent={<>
        <PropsyBtn background={btnGradient}
                  //  display={btnSignupDisplay}
                   content={iconAddUser}
                   type={'button'} 
                   onClick={handleEnableDisableSignUp}
        />
        <PropsyBtn background={btnGradient}
                   content={iconForgotpassBtn}
                   type={'button'} 
                   onClick={handleForgotPassword} />
        </>}
    />   
    <PropsyAlertBox display={alertDisplay}
                    content={alertContent}
    />   
    <ResetPasswordPopup display={forgotPasswordDisplay} 
    onClick={handleForgotPasswordSend}
    onClickClose={handleForgotPasswordClose}
     />
  </>);
};

export default SignInForm;


