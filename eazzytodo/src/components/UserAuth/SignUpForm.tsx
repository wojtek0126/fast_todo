import { useState } from "react";
import { iconSignUpBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";
import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignUpForm = () => {    
    const [emailValue, setEmailValue] = useState("");
    const [passwordlValue, setPasswordValue] = useState("");


    const handleChangeEmail = (event: any) => {
        setEmailValue(event.target.value);
      };

      const handleChangePassword = (event: any) => {
        setPasswordValue(event.target.value);
      };      

  const firebaseInstance = getFirebase();
  const email = emailValue;
  const password = passwordlValue;
  console.log(email, "email check");

  const signUp = async (event: any) => {
    event.preventDefault();

    if(typeof email == "string") 
        console.log("String value");
    else 
        console.log("Not a string");  
    

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log("user", user);
        alert(`Welcome ${email}!`);
      }
    } catch (error: any) {
      console.log("error", error);
      alert(error.message);
    }
  };


  return (
    <PropsySignLogForm 
    textHead={'Sign up'}
    buttonContent={iconSignUpBtn}
    emailInputTxt={email}
    passInputTxt={password}
    onChangeEmail={handleChangeEmail}
    onChangePass ={handleChangePassword}
    onSubmit={signUp}
    margin={2}
/>
  );
};

export default SignUpForm;


