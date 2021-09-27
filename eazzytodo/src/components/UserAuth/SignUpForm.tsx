import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { iconCloseBtn, iconSignUpBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import { displayAlertBoxValue, displayLoginBoxState, displaySignupBoxState } from "../../recoil/recoil";
import { btnGradient } from "../../styles/elements";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsyBtn from "../propsyComps/PropsyBtn";
import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignUpForm = () => {      

    const [emailValue, setEmailValue] = useState("");
    const [passwordlValue, setPasswordValue] = useState("");

    const [alertDisplay, setAlertDiaspaly] = useState('none');
    const [alertContent, setAlerContent] = useState("");

    const setLoginBoxDisplay = useSetRecoilState(displayLoginBoxState);

    const [SignupBoxDisplay, setSignupBoxDisplay] = useRecoilState(displaySignupBoxState);


  

    const alertBoxDisplay = useRecoilValue(displayAlertBoxValue);

    const handleChangeEmail = (event: any) => {
        setEmailValue(event.target.value);
      };

      const handleChangePassword = (event: any) => {
        setPasswordValue(event.target.value);
      };  
     
      
    const setLoginOn = () => {
      setLoginBoxDisplay('flex');
      setSignupBoxDisplay('none');
    };  

  const firebaseInstance = getFirebase();
  const email = emailValue;
  const password = passwordlValue;

  const signUp = async (event: any) => {
    event.preventDefault();   

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
  };


  return (<>
    <PropsySignLogForm 
    display={SignupBoxDisplay}
    textHead={'Sign up'}
    buttonContent={iconSignUpBtn}
    emailInputTxt={emailValue}
    passInputTxt={passwordlValue}
    onChangeEmail={handleChangeEmail}
    onChangePass ={handleChangePassword}
    onSubmit={signUp}
    margin={2}
    extraContent={<PropsyBtn type='button' content={iconCloseBtn} background={btnGradient} onClick={setLoginOn} />}
/>
<PropsyAlertBox display={alertDisplay}
                    content={alertContent}
    />
  </>);
};

export default SignUpForm;


