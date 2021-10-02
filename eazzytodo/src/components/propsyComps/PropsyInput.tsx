import React from "react";
import { Input } from "theme-ui";
import { inputBorderRadius } from "../../styles/elements";


const PropsyInput = React.memo(({text,
                                 onChange,
                                 display,
                                 type,
                                 marginTop =  0
                                       }: any) => {
    return (
               <Input type={type}
                sx={{
                    display: `${display}`,
                    wordWrap: 'wrap',
                    fontFamily: 'body',
                    backgroundColor: 'inputBackground',
                    color: 'text2',   
                    borderRadius: inputBorderRadius,
                    margin: 0,
                    marginTop: marginTop,
                    padding: 2,
                    width: '100%',
                    alignSelf: 'center'
            }} onChange={onChange} placeholder="Email" {...text} />
)});

export default PropsyInput;