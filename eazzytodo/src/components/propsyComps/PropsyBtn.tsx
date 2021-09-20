import React from "react";
import { Button } from "theme-ui";
import { btnBorderRadius } from "../../styles/elements";


const PropsyBtn = React.memo(({animTime,
                               background,
                               animation, 
                               onClick, 
                               content, 
                               isDisabled, 
                               opacity, 
                               transition, type
                              }: any ) => {

    return (
        <Button disabled={isDisabled} 
                type={type}
        sx={{
          backgroundImage: `${background}`,
          display: 'flex',
          cursor: 'pointer',
          margin: '10px',
          padding: '15px',
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: `${transition}`,
          backgroundSize: '200% auto',
          color: 'white',            
          boxShadow: '0 0 20px #eee',
          borderRadius: btnBorderRadius,
          animation: `${animation} ${animTime} ease 1`,
          opacity: `${opacity}`,
          '&:hover, &:focus': {  
            backgroundPosition: 'right center', 
            color: '#fff',
            textDecoration: 'none'
         }
        }}
          onClick={onClick}
        >{content}</Button>
    )
    
});

export default PropsyBtn 