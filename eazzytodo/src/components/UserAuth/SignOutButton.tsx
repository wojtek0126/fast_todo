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
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>    
      <PropsyBtn onClick={() => signOut()}
                 tooltipId={'logout'}
                 tooltipTxt={'log out and exit'}
                 content={iconSignOutBtn}
                 background={btnGradient}
                 />
    </div>
  );
};

export default SignOutButton;


