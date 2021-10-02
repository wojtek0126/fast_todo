import React from "react";
import { Box } from "theme-ui";
import { boxBorderRadius, itemBoxShadow } from "../../styles/elements";


const PropsyFlexBox = React.memo(({display = 'flex',
                                   margin,
                                   marginTop = 50,
                                   marginBottom = 80,
                                   width, 
                                   animation, 
                                   transition, 
                                   onClick, 
                                   content, 
                                   opacity = 0.8,
                                   backgroundColor = 'todoTaskBackground' 
                                }: any) => {

    return (
        <Box 
        sx={{
            flexDirection: 'column',
            display: `${display}`,
            borderRadius: boxBorderRadius,
            backgroundColor: `${backgroundColor}`,
            color: 'todoText',
            width: `${width}`,
            wordBreak: 'break-word',
            position: 'relative',             
            padding: 2, 
            margin: `${margin}`,
            marginTop: `${marginTop}`,
            marginBottom: `${marginBottom}`,
            minHeight: 100,
            boxShadow: itemBoxShadow,
            opacity: `${opacity}`,
            animation: `${animation}`,
            transition: `${transition}`, 
                }}
          onClick={onClick}
        >{content}</Box>
    )    
});

export default PropsyFlexBox;