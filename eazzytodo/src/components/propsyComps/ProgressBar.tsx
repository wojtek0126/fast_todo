import { Box } from "@theme-ui/components";
import { useRecoilValue } from "recoil";
import { todosPercentDone } from "../../recoil/recoil";
import { boxBorderRadius } from "../../styles/elements";

const ProgressBar = ({progress}: any) => { 
    const percentGetRecoil = useRecoilValue(todosPercentDone);

    return (
        <Box sx={{backgroundColor: percentGetRecoil,
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