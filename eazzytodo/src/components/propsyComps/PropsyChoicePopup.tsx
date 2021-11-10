import { btnGradient } from "../../styles/elements";
import PropsyAlertBox from "./PropsyAlertBox";
import PropsyBtn from "./PropsyBtn";
import { PropsyCompProps } from "./propsyCompsInterface";

const PropsyChoicePopup = ({display,
                            onClickYes, 
                            onClickNo,
                            yesBtnAnimation,
                            noBtnAnimation,
                            yesBtnContent,
                            noBtnContent, 
                            tooltipYesId,
                            tooltipNoId,
                            tooltipYesTxt, 
                            tooltipNoTxt}: PropsyCompProps) => {
    return <PropsyAlertBox  display={display} 
                            margin={'0 auto'} 
                            content={<> 
    <PropsyBtn onClick={onClickYes}
              tooltipId={tooltipYesId}
              tooltipTxt={tooltipYesTxt}
               content={yesBtnContent}
               background={btnGradient}
               animation={yesBtnAnimation} 
               animTime={'1s'}  />
      <PropsyBtn content={noBtnContent}
       tooltipId={tooltipNoId}
       tooltipTxt={tooltipNoTxt}
                 onClick={onClickNo}
                 background={btnGradient} 
                 animation={noBtnAnimation} 
                 animTime={'1s'} />
      </>} />
  };
  

  export default PropsyChoicePopup;

