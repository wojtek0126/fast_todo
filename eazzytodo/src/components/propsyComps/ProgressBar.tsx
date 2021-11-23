import { Box } from "@theme-ui/components";
import { boxBorderRadius } from "../../styles/elements";
import { PropsyCompProps } from "./propsyCompsInterface";


const ProgressBar = ({progress, progressColor}: PropsyCompProps) => { 

    return (
        <Box sx={{backgroundColor: `${progressColor}`,
            width: `${progress}%`,
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: 0.3,
            transition: '1s',
            borderRadius: boxBorderRadius,            
            }}>       
        </Box>
        )  
};

export default ProgressBar;