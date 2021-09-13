import { Button } from "theme-ui";
import { btnBorderRadius } from "../../styles/elements";


const PropsyBtn = ({background, animation, click, content, isDisabled}: any) => {

    return (
        <Button disabled={isDisabled} 
        sx={{
          background: `${background}`,
          cursor: 'pointer',
          margin: '10px',
          padding: '15px',
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: '0.5s',
          backgroundSize: '200% auto',
          color: 'white',            
          boxShadow: '0 0 20px #eee',
          borderRadius: btnBorderRadius,
          animation: `${animation} 1s ease 1`,
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