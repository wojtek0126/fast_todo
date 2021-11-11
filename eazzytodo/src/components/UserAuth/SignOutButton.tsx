import { useState } from "react";
import { iconSignOutBtn } from "../../content/icons";
import getFirebase from "../../firebase/firebase";
import { btnGradient, clickedBtnAnimShrink } from "../../styles/elements";
import PropsyBtn from "../propsyComps/PropsyBtn";

export const handleButtonAnimation = (setButtonState: any, animationName: string, delay: number) => {
  setButtonState(animationName);
  setTimeout(() => {
    setButtonState("");
  }, delay);  
};


const SignOutButton = () => {
  const [animBtn1, setAnimBtn1] = useState("");

  const firebaseInstance = getFirebase();
     

  const signOut = async () => {
    handleButtonAnimation(setAnimBtn1, clickedBtnAnimShrink, 1000);
    setTimeout(async () => {
      try {
        if (firebaseInstance) {
          await firebaseInstance.auth().signOut();   
        }
      } catch (error) {
        console.log("error", error);
      }
    }, 1000);
  };

  return (
    <div>    
      <PropsyBtn onClick={() => signOut()}
                 tooltipId={'logout'}
                 tooltipTxt={'log out and exit'}
                 content={iconSignOutBtn}
                 background={btnGradient}
                 animation={animBtn1} 
                 animTime={'1s'}  
                 />
    </div>
  );
};

export default SignOutButton;


