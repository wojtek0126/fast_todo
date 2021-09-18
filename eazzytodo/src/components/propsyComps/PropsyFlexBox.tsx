import { Button, Flex } from "theme-ui";
import { boxBorderRadius, itemBoxShadow } from "../../styles/elements";


const PropsyFlexBox = ({margin, marginTop = 50, marginBottom = 80, width, animation, transition, onClick, content, opacity}: any) => {

    return (
        <Flex 
        sx={{
            flexDirection: 'column',
            borderRadius: boxBorderRadius,
            backgroundColor: `todoBackground`,
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
        >{content}</Flex>
    )
    
}

export default PropsyFlexBox;