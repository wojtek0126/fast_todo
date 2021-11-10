import React from "react";
import { Box } from "theme-ui";
import { boxBorderRadius, itemBoxShadow } from "../../styles/elements";
import { PropsyCompProps } from "./propsyCompsInterface";


const PropsyAlertBox = React.memo(({content, margin, display = 'none'}: PropsyCompProps ) => {

    return (
        <Box
        sx={{  
        display: `${display}`,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: boxBorderRadius,
        backgroundColor: `todoTaskBackground`,
        color: 'todoText',     
        wordBreak: 'break-word',        
        padding: 2,        
        boxShadow: itemBoxShadow,
        transition: '1s',
        position: 'absolute',
        top:'50%',    
        zIndex: 20,
        margin: margin    
    }}       
        >{content}</Box>
    )
    
});

export default PropsyAlertBox