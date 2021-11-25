import Typist from 'react-typist';
import { Paragraph } from 'theme-ui';
import { PropsyCompProps } from "./propsyCompsInterface";


const TypistText = ({typistText, typistStyle}: PropsyCompProps) => { 
    

    return (
      <Typist cursor={{show: false}}>
        <Paragraph sx={typistStyle}>{typistText}</Paragraph>                  
      </Typist>
        )  
};

export default TypistText;