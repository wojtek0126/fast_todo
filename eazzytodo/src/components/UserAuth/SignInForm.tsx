
import { useState } from "react";
// import styled from "styled-components";
import { iconSignInBtn } from "../../content/icons";

import getFirebase from "../../firebase/firebase";

import PropsySignLogForm from "../propsyComps/PropsySignLogForm";

const SignInForm = () => {
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

  const signIn = async (event: any) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log("user", user);
        alert("Welcome back!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <PropsySignLogForm 
        textHead={'Log in'}
        buttonContent={iconSignInBtn}
        emailInputTxt={email}
        passInputTxt={password}
        onChangeEmail={handleChangeEmail}
        onChangePass ={handleChangePassword}
        onSubmit={signIn}
        margin={2}
    />
  );
};

export default SignInForm;


