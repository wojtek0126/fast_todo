import React from "react";
import { Flex, Input, Paragraph } from "theme-ui";
import { btnGradient, btnPrimary, inputGeneral, loginSignupTxt } from "../../styles/elements";
import PropsyBtn from "./PropsyBtn";
import { PropsyCompProps } from "./propsyCompsInterface";
import PropsyFlexBox from "./PropsyFlexBox";


const PropsySignLogForm = React.memo(({textHead,
                                       transition,
                                       opacity,
                                       display,
                                       buttonContent,
                                       onSubmit,
                                       onChangeEmail,
                                       onChangePass, 
                                       emailInputTxt,
                                       passInputTxt,
                                       margin, 
                                       extraContent,
                                       btnAnimation,
                                       btnAnimTime,
                                       tooltipId,
                                       tooltipTxt,
                                       width
                                       }: PropsyCompProps) => {
    return (
        <PropsyFlexBox 
        width={width}
        transition={transition}
        opacity={opacity}
        display={display}
        margin={margin}
        content={<>
            <form onSubmit={onSubmit}>
               <Paragraph sx={loginSignupTxt}>{textHead}</Paragraph>
               <Input  sx={inputGeneral}
                       onChange={onChangeEmail}
                       placeholder="Email" 
                       {...emailInputTxt} />
               <Input sx={inputGeneral}
                      onChange={onChangePass}
                      placeholder="Password" 
                      type="password"
                      {...passInputTxt} />              
             <Flex>
             <PropsyBtn sx={btnPrimary}
                          tooltipTxt={tooltipTxt}
                          tooltipId={tooltipId}
                          type="submit"
                          background={btnGradient}
                          content={buttonContent}
                          onSubmit={onSubmit}
                          animation={btnAnimation}
                          animTime={btnAnimTime}
                          >Sign in</PropsyBtn>
                {extraContent}
             </Flex>
               </form>
         </>} />   
    )
    
});

export default PropsySignLogForm;