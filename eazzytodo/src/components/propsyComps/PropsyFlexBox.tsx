import { Button, Flex } from "theme-ui";
import { boxBorderRadius, itemBoxShadow } from "../../styles/elements";


const PropsyFlexBox = ({animation, click, content, opacity}: any) => {

    return (
        <Flex 
        sx={{
            flexDirection: 'column',
            borderRadius: boxBorderRadius,
            backgroundColor: `todoBackground`,
            color: 'todoText',
            width: '80vw',
            wordBreak: 'break-word',
            position: 'relative',    
            marginLeft: '10px',
            padding: 2, 
            marginTop: 50,
            marginBottom: 80,
            minHeight: 100,
            boxShadow: itemBoxShadow,
            opacity: `${opacity}`,
            animation: `${animation}`,
            transition: '2s'         
                }}
          onClick={click}
        >{content}</Flex>
    )
    
}

export default PropsyFlexBox;