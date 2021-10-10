import { Box } from "@theme-ui/components";
import Wave from "react-wavify";
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
            borderRadius: boxBorderRadius
            }}>  
          <Wave mask="url(#mask)" fill="#1277b0" style={{height: '130%', position: 'absolute', left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
                </mask>
            </defs>
         </Wave>            
        </Box>
        )  
};

export default ProgressBar;