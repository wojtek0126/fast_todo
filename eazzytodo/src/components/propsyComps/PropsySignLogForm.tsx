import React from "react";
import { Flex, Input, Paragraph } from "theme-ui";
import { btnGradient, btnPrimary, inputGeneral, loginSignupTxt } from "../../styles/elements";
import PropsyBtn from "./PropsyBtn";
import PropsyFlexBox from "./PropsyFlexBox";


const PropsySignLogForm = React.memo(({textHead,
                                       display,
                                       buttonContent,
                                       onSubmit,
                                       onChangeEmail,
                                       onChangePass, 
                                       emailInputTxt,
                                       passInputTxt,
                                       margin, 
                                       extraContent
                                       }: any) => {
    return (
        <PropsyFlexBox 
        display={display}
        margin={margin}
        content={<>
            <form onSubmit={onSubmit}>
               <Paragraph sx={loginSignupTxt}>{textHead}</Paragraph>
               <Input  sx={inputGeneral} onChange={onChangeEmail} placeholder="Email" {...emailInputTxt} />
               <Input sx={inputGeneral} onChange={onChangePass} placeholder="Password" type="password" {...passInputTxt} />                          
           
             <Flex>
             <PropsyBtn sx={btnPrimary}
                          type="submit"
                          background={btnGradient}
                          content={buttonContent}
                          onSubmit={onSubmit}
                          >Sign in</PropsyBtn>
                {extraContent}
             </Flex>
               </form>
         </>} />   
    )
    
});

export default PropsySignLogForm;