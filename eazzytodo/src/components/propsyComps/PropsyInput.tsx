import React from "react";
import { Input } from "theme-ui";
import { inputBorderRadius } from "../../styles/elements";


const PropsyInput = React.memo(({text,
                                 fontSize = "12px !important",
                                 onChange,
                                 display,
                                 type,
                                 marginTop =  0,
                                 width = '100%',
                                 placeholder="...",
                                 fontFamily = 'body',
                                 value
                                       }: any) => {
    return (
               <Input type={type}                     
                sx={{
                    fontSize: fontSize,
                    display: `${display}`,
                    wordWrap: 'wrap',
                    fontFamily: fontFamily,
                    backgroundColor: 'inputBackground',
                    color: 'text2',   
                    borderRadius: inputBorderRadius,
                    margin: 0,
                    marginTop: marginTop,
                    padding: 2,
                    width: `${width}`,
                    alignSelf: 'center',
                    "@media (max-width: 780px)": { 
                        fontSize: "8px !important",
                        width: '103px'             
                      }
            }} onChange={onChange}
               placeholder={placeholder}
               {...text}
                value={value} />
)});

export default PropsyInput;