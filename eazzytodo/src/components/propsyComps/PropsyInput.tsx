import React from "react";
import { Input } from "theme-ui";
import { inputBorderRadius } from "../../styles/elements";


const PropsyInput = React.memo(({text,
                                       onChange,
                                       display,
                               

                                       }: any) => {
    return (
               <Input  sx={{
                    display: `${display}`,
                    wordWrap: 'wrap',
                    fontFamily: 'body',
                    backgroundColor: 'inputBackground',
                    color: 'text2',   
                    borderRadius: inputBorderRadius,
                    margin: 0,
                    marginTop: 2,
                    padding: 2,
                    width: '100%',
                    alignSelf: 'center'
            }} onChange={onChange} placeholder="Email" {...text} />
)});

export default PropsyInput;