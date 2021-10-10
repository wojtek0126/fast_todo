import firebase from "firebase";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { setTimeout } from "timers";

import { iconAddUser, iconCloseBtn, iconForgotpassBtn, iconSendMailBtn, iconSignInBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import { displayAlertBoxState, displayLoginBoxState, displaySignupBoxState } from "../../recoil/recoil";
import { btnGradient, clickedBtnAnimShrink } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";
import { handleButtonAnimation } from "./SignOutButton";

const SignInForm = () => {

  const [emailValue, setEmailValue] = useState("");
  const [passwordlValue, setPasswordValue] = useState("");

  const [ animBtn1, setAnimBtn1 ] = useState("");
  const [ animBtn2, setAnimBtn2 ] = useState("");
  const [ animBtn3, setAnimBtn3 ] = useState("");
  const [ animBtn4, setAnimBtn4 ] = useState("");
  const [ animBtn5, setAnimBtn5 ] = useState("");


  const [alertDisplay, setAlertDiaspaly] = useState('none');
  const [alertContent, setAlerContent] = useState("");

  const [forgotPasswordDisplay, setForgotPasswordDisplay] = useState('none');
  
  const setRecoilAlertBoxDisplay = useSetRecoilState(displayAlertBoxState);

  const [loginBoxDisplay, setLoginBoxDisplay] = useRecoilState(displayLoginBoxState);

  const setSignupBoxDisplay = useSetRecoilState(displaySignupBoxState);
  
  const handleEnableDisableSignUp = () => {
    handleButtonAnimation(setAnimBtn2, clickedBtnAnimShrink, 1000);
      setTimeout(() => {
        setRecoilAlertBoxDisplay('flex');    
        setLoginBoxDisplay('none');
        setSignupBoxDisplay('flex'); 
      }, 1000);     
  };
  
  const handleChangeEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPasswordValue(event.target.value);
  };  

  const handleForgotPassword = () => {
    handleButtonAnimation(setAnimBtn3, clickedBtnAnimShrink, 1000);
    setTimeout(() => {
      setForgotPasswordDisplay('flex');
    }, 1000)
  };

  const handleForgotPasswordClose = () => {
    handleButtonAnimation(setAnimBtn5, clickedBtnAnimShrink, 1000);
    setTimeout(() => {
      setForgotPasswordDisplay('none');
    }, 1000)
   
  };

  const handleForgotPasswordSend = () => {
    handleButtonAnimation(setAnimBtn4, clickedBtnAnimShrink, 1000);
    setTimeout(() => {
      firebase.auth().sendPasswordResetEmail(emailValue);
      setTimeout(() => {
        setForgotPasswordDisplay('none');
      }, 2000);
    }, 1000)
   
  };
 
  const firebaseInstance = getFirebase();
  const email = emailValue;
  const password = passwordlValue;

  const signIn = async (event: any) => {
    event.preventDefault();
    handleButtonAnimation(setAnimBtn1, clickedBtnAnimShrink, 1000);
    setTimeout(async () => {
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
    }, 1000);
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
 // replace with PropsyChoicePopup 
  const ResetPasswordPopup = ({display, onClick, onClickClose}: any) => {


    return <PropsyAlertBox  display={display} 
                            margin={'0 auto'} 
                            content={<> 
    <PropsyBtn onClick={onClick}
              tooltipId={'reset-password'}
              tooltipTxt={`send reset password request(enter email above): ${emailValue}`}
               content={iconSendMailBtn}
               background={btnGradient}
               animation={animBtn4} 
               animTime={'1s'}  />
      <PropsyBtn content={iconCloseBtn}
       tooltipId={'reset-password-close'}
       tooltipTxt={`close reset password window`}
                 onClick={onClickClose}
                 background={btnGradient} 
                 animation={animBtn5} 
                 animTime={'1s'} />
      </>} />
  };


  return (<>   
    <PropsySignLogForm
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
        btnAnimation={animBtn1} 
        btnAnimTime={'1s'} 
        // margin={'0 auto'}
        extraContent={<>
        <PropsyBtn background={btnGradient}
                   tooltipId={'register'}
                   tooltipTxt={'open register window'}
                   content={iconAddUser}
                   type={'button'}
                   animation={animBtn2} 
                   animTime={'1s'}   
                   onClick={handleEnableDisableSignUp}
        />
        <PropsyBtn background={btnGradient}
                   size={'0.5'}
                   tooltipId={'forgot-password'}
                   tooltipTxt={'forgot password'}
                   content={iconForgotpassBtn}
                   tooltipText={"forgotPassword"}
                   type={'button'} 
                   animation={animBtn3} 
                   animTime={'1s'}  
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


