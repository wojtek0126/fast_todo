import { Button } from "theme-ui";
import { btnBorderRadius } from "../../styles/elements";


const PropsyBtn = ({animTime, background, animation, click, content, isDisabled, opacity, transition}: any ) => {

    return (
        <Button disabled={isDisabled} 
        sx={{
          backgroundImage: `${background}`,
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
          onClick={click}
        >{content}</Button>
    )
    
}

export default PropsyBtn;