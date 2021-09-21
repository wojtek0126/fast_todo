import { useState } from "react";
import { useRecoilValue } from "recoil";
import { iconSignUpBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import { displayStateValue } from "../../recoil/recoil";
import PropsyAlertBox from "../propsyComps/PropsyAlertBox";
import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignUpForm = () => {      

    const [emailValue, setEmailValue] = useState("");
    const [passwordlValue, setPasswordValue] = useState("");

    const [alertDisplay, setAlertDiaspaly] = useState('none');
    const [alertContent, setAlerContent] = useState("");


    const isEnabled = useRecoilValue(displayStateValue);

    const handleChangeEmail = (event: any) => {
        setEmailValue(event.target.value);
      };

      const handleChangePassword = (event: any) => {
        setPasswordValue(event.target.value);
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
    display={isEnabled}
    textHead={'Sign up'}
    buttonContent={iconSignUpBtn}
    emailInputTxt={emailValue}
    passInputTxt={passwordlValue}
    onChangeEmail={handleChangeEmail}
    onChangePass ={handleChangePassword}
    onSubmit={signUp}
    margin={2}
/>
<PropsyAlertBox display={alertDisplay}
                    content={alertContent}
    />
  </>);
};

export default SignUpForm;


