

import { iconSignOutBtn } from "../../content/icons";
import getFirebase from "../../firebase/firebase";
import { btnGradient } from "../../styles/elements";
import PropsyBtn from "../propsyComps/PropsyBtn";

const SignOutButton = () => {
  const firebaseInstance = getFirebase();

  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>    
      <PropsyBtn onClick={() => signOut()}
                 content={iconSignOutBtn}
                 background={btnGradient}
                 />
    </div>
  );
};

export default SignOutButton;


