import React from "react";
import { Button } from "theme-ui";
import { btnBorderRadius } from "../../styles/elements";
import ReactTooltip from 'react-tooltip';

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
                               size = '1'
                              }: any ) => {                      
                               

    return (<>
        <Button disabled={isDisabled} 
                type={type}                
        sx={{
          transform: `scale(${size})`,
          backgroundImage: `${background}`,
          display: display,
          fontSize: [16, 20],
          cursor: 'pointer',
          margin: '10px',
          padding: '15px',
          textAlign: 'center',          
          transition: `${transition}`,
          backgroundSize: '200% auto',
          color: 'white',            
          boxShadow: '0 0 20px #eee',
          borderRadius: borderRadius,
          animation: `${animation} ${animTime} ease 1`,
          opacity: `${opacity}`,
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