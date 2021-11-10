import React from "react";
import { Button } from "theme-ui";
import { btnBorderRadius } from "../../styles/elements";
import ReactTooltip from 'react-tooltip';
import { PropsyCompProps } from "./propsyCompsInterface";


const PropsyBtn = React.memo(({animTime,
                               background,
                               animation, 
                               onClick, 
                               content, 
                               isDisabled, 
                               opacity, 
                               transition,
                               type,
                               display = 'flex',
                               borderRadius = btnBorderRadius,
                               tooltipId,
                               tooltipTxt,
                               size = '1',
                               position,
                               top,
                               right,
                               left,
                               fontSize = '[16, 20]',
                               margin = '10px',
                               color = 'white'
                              }: PropsyCompProps ) => {  
    return (<>
        <Button disabled={isDisabled} 
                type={type}                
        sx={{
          transform: `scale(${size})`,
          backgroundImage: `${background}`,
          display: display,
          fontSize: fontSize,
          cursor: 'pointer',
          margin: margin,
          padding: '15px',
          textAlign: 'center',          
          transition: `${transition}`,
          backgroundSize: '200% auto',
          color: color,            
          boxShadow: '0 0 20px #eee',
          borderRadius: borderRadius,
          animation: `${animation} ${animTime} ease 1`,
          opacity: `${opacity}`,
          position: position,
          top: top,
          right: right,
          left: left,
          '&:hover, &:focus': {  
            backgroundPosition: 'right center', 
            color: '#fff',
            textDecoration: 'none'
         }
        }}
          onClick={onClick}
        >{<div style={{display: 'flex'}} data-tip data-for={tooltipId}>{content}</div>}</Button>
        <ReactTooltip id={tooltipId} place="bottom" effect="solid">
       {tooltipTxt}
      </ReactTooltip>
    </>)    
});

export default PropsyBtn 