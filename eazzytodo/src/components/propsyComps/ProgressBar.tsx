import { Box } from "@theme-ui/components";
import Particles from "react-particles-js";
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
       {/* <Particles style={{position: 'absolute', bottom: 0, left: 0, opacity: 0.5}}
        params={{
            "particles": {
                "number": {
                    "value": 20
                },
                "size": {
                    "value": 10
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    }
                }
            }
        }} />        */}
        </Box>
        )  
};

export default ProgressBar;