import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Flex } from "theme-ui";
import { iconCloseBtn, iconSignUpBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import {  displayLoginBoxState, displaySignupBoxState } from "../../recoil/recoil";
import { btnGradient, clickedBtnAnimShrink } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";
import PropsySignLogForm from "../propsyComps/PropsySignLogForm";
import { handleButtonAnimation } from "./SignOutButton";

const SignUpForm = () => {      

    const [emailValue, setEmailValue] = useState("");
    const [passwordlValue, setPasswordValue] = useState("");

    const [alertDisplay, setAlertDiaspaly] = useState('none');
    const [alertContent, setAlerContent] = useState("");

    //all this to recoil  
    const [ animBtn1, setAnimBtn1 ] = useState("");
    const [ animBtn2, setAnimBtn2 ] = useState("");

    const setLoginBoxDisplay = useSetRecoilState(displayLoginBoxState);

    const [SignupBoxDisplay, setSignupBoxDisplay] = useRecoilState(displaySignupBoxState);  

    const handleChangeEmail = (event: any) => {
        setEmailValue(event.target.value);
      };

      const handleChangePassword = (event: any) => {
        setPasswordValue(event.target.value);
      };       
      
      const setLoginOn = () => {
        handleButtonAnimation(setAnimBtn2, clickedBtnAnimShrink, 1000);
        setTimeout(() => {
          setLoginBoxDisplay('flex');
          setSignupBoxDisplay('none');
        }, 1000);
      
      };  

    const firebaseInstance = getFirebase();
    const email = emailValue;
    const password = passwordlValue;

    const signUp = async (event: any) => {
      event.preventDefault();   
      handleButtonAnimation(setAnimBtn1, clickedBtnAnimShrink, 1000);
      setTimeout(async () => {
        try {
          if (firebaseInstance) {
            const user = await firebaseInstance
              .auth()
              .createUserWithEmailAndPassword(email, password);
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

  };


  return (<>
    <PropsySignLogForm 
    tooltipId={'register-new'}
    tooltipTxt={'register new user'}
    display={SignupBoxDisplay}
    textHead={'Sign up'}
    buttonContent={iconSignUpBtn}
    emailInputTxt={emailValue}
    passInputTxt={passwordlValue}
    onChangeEmail={handleChangeEmail}
    onChangePass ={handleChangePassword}
    onSubmit={signUp}
    btnAnimation={animBtn1} 
    btnAnimTime={'1s'} 
    extraContent={<PropsyBtn type='button'
                             tooltipId={'register-close'}
                             tooltipTxt={'close register window'}
                             content={iconCloseBtn}
                             background={btnGradient}
                             onClick={setLoginOn} 
                             animation={animBtn2} 
                             animTime={'1s'} 
                             />}
                              />
<PropsyAlertBox display={alertDisplay}
                    content={alertContent}
    />
  </>);
};

export default SignUpForm;


