import { Input, Paragraph } from "theme-ui";
import { btnGradient, btnPrimary, inputGeneral, loginSignupTxt } from "../../styles/elements";
import PropsyBtn from "./PropsyBtn";
import PropsyFlexBox from "./PropsyFlexBox";


const PropsySignLogForm = ({textHead,
                            buttonContent,
                            onSubmit,
                            onChangeEmail,
                            onChangePass, 
                            emailInputTxt,
                            passInputTxt,
                            margin
                            }: any) => {

    return (
        <PropsyFlexBox 
        margin={margin}
        content={<>
            <form onSubmit={onSubmit}>
               <Paragraph sx={loginSignupTxt}>{textHead}</Paragraph>
               <Input sx={inputGeneral} onChange={onChangeEmail} placeholder="Email" {...emailInputTxt} />
               <Input sx={inputGeneral} onChange={onChangePass} placeholder="Password" type="password" {...passInputTxt} />
               <PropsyBtn sx={btnPrimary}
                          type="submit"
                          background={btnGradient}
                          content={buttonContent}
                          >Sign in</PropsyBtn>
             </form>
         </>} />   
    )
    
}

export default PropsySignLogForm;