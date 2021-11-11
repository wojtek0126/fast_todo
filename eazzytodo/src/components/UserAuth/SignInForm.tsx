import firebase from "firebase";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { setTimeout } from "timers";

import { iconAddUser, iconForgotpassBtn, iconSignInBtn } from "../../content/icons";

// import ParticleEffectButton from 'react-particle-effect-button';

import getFirebase from "../../firebase/firebase";
import { displayAlertBoxState, displayLoginBoxState, displaySignupBoxState } from "../../recoil/recoil";
import { btnGradient, clickedBtnAnimShrink } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";
import ResetPasswordPopup from "../propsyComps/ResetPasswordPopup";
import { handleButtonAnimation } from "./SignOutButton";


const SignInForm = () => {

  const [emailValue, setEmailValue] = useState("");
  const [passwordlValue, setPasswordValue] = useState("");

  const [ animBtn1, setAnimBtn1 ] = useState("");
  const [ animBtn2, setAnimBtn2 ] = useState("");
  const [ animBtn3, setAnimBtn3 ] = useState("");
  const [ animBtn4, setAnimBtn4 ] = useState("");
  const [ animBtn5, setAnimBtn5 ] = useState("");
  // const [ particleEffect, setParticleEffect ] = useState(false);


  const [alertDisplay, setAlertDiaspaly] = useState('none');
  const [alertContent, setAlertContent] = useState("");

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
  
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const signIn = async (event: Event) => {
    event.preventDefault();
    handleButtonAnimation(setAnimBtn1, clickedBtnAnimShrink, 1000);  
      try {
        if (firebaseInstance) {
          // setParticleEffect(true);
          const user = await firebaseInstance
            .auth()
            .signInWithEmailAndPassword(email, password);
            localStorage.setItem('userEmail', email);          
             
        }
      } catch (error: string | any) {
        // const err: firebase.firestore.FirestoreError | unknown = error;
        console.log("error", error);
        setAlertDiaspaly('flex');
        setAlertContent(`${error.message}`);
        setTimeout(() => {
          setAlertDiaspaly('none');
        }, 2000);
      } 
  };


  return (<>   
  {/* <ParticleEffectButton color="#fe6333" hidden={particleEffect}> */}
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
    animBtnState1={animBtn4}
    animBtnState2={animBtn5}
    emailValue={emailValue}
     />
     {/* </ParticleEffectButton> */}
  </>);
};

export default SignInForm;


