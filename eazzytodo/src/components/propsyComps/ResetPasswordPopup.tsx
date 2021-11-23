import { iconCloseBtn, iconSendMailBtn } from "../../content/icons";
import { btnGradient } from "../../styles/elements";
import PropsyAlertBox from "./PropsyAlertBox";
import PropsyBtn from "./PropsyBtn";
import { PropsyCompProps } from "./propsyCompsInterface";

// type SigInFormProps = {
//     todo: Todo;     
//   };   

 // replace that popup with PropsyChoicePopup 
 const ResetPasswordPopup = ({display, onClick, onClickClose, emailValue, animBtnState1, animBtnState2}: PropsyCompProps) => {

    return <PropsyAlertBox  display={display} 
                            margin={'0 auto'} 
                            content={<> 
    <PropsyBtn onClick={onClick}
              tooltipId={'reset-password'}
              tooltipTxt={`send reset password request(enter email above): ${emailValue}`}
               content={iconSendMailBtn}
               background={btnGradient}
               animation={animBtnState1} 
               animTime={'1s'}  />
      <PropsyBtn content={iconCloseBtn}
       tooltipId={'reset-password-close'}
       tooltipTxt={`close reset password window`}
                 onClick={onClickClose}
                 background={btnGradient} 
                 animation={animBtnState2} 
                 animTime={'1s'} />
      </>} />
  };

  export default ResetPasswordPopup;