import firebase from "firebase";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { iconAddUser, iconCloseBtn, iconForgotpassBtn, iconSendMailBtn, iconSignInBtn } from "../../content/icons";

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


  const handleEnableDisableSignUp = () => {
      setRecoilAlertBoxDisplay('flex');
    
      setLoginBoxDisplay('none');
      setSignupBoxDisplay('flex');
  
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
    return <PropsyAlertBox  display={display} 
                            margin={'0 auto'} 
                            content={<> 
    <PropsyBtn onClick={onClick}
              tooltipId={'reset-password'}
              tooltipTxt={`send reset password request(enter email above): ${emailValue}`}
               content={iconSendMailBtn}
               background={btnGradient} />
      <PropsyBtn content={iconCloseBtn}
       tooltipId={'reset-password-close'}
       tooltipTxt={`close reset password window`}
                 onClick={onClickClose}
                 background={btnGradient} />
      </>} />
  };


  return (<>   
    <PropsySignLogForm
        // width={'20vw'} 
        tooltipId={'login'}
        tooltipTxt={'login'}
        transition={'2s'}
        display={loginBoxDisplay}
        textHead={'Log in'}
        buttonContent={iconSignInBtn}
        emailInputTxt={emailValue}
        passInputTxt={passwordlValue}
        onChangeEmail={handleChangeEmail}
        onChangePass ={handleChangePassword}
        onSubmit={signIn}
        // margin={'0 auto'}
        extraContent={<>
        <PropsyBtn background={btnGradient}
                   tooltipId={'register'}
                   tooltipTxt={'open register window'}
                   content={iconAddUser}
                   type={'button'} 
                   onClick={handleEnableDisableSignUp}
        />
        <PropsyBtn background={btnGradient}
                   size={'0.5'}
                   tooltipId={'forgot-password'}
                   tooltipTxt={'forgot password'}
                   content={iconForgotpassBtn}
                   tooltipText={"forgotPassword"}
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


