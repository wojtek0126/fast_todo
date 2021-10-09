import { Box, Paragraph } from "@theme-ui/components";
import { useEffect, useState } from "react";
import { mockText, userWelcomeTxt } from "../../styles/elements";

import ReactLoading from 'react-loading';


const RenderUserName = () => {
    const userEmail = localStorage.getItem('userEmail'); 
    const [loadingDisplay, setLoadingDisplay] = useState('flex');
    const [userDisplay, setUserDisplay] = useState('none');
    const timeoutTime = 1500;
    useEffect(() => {
      setTimeout(() => {
        setLoadingDisplay('none');
        setUserDisplay('flex');
      }, timeoutTime);
    }, []);


    return  (<>
              <Box sx={{display: loadingDisplay}}>
                   <Paragraph sx={mockText}>
                     <ReactLoading type={'spin'} height={30} width={30} />
                   </Paragraph>
             </Box>
            
            
              <Box sx={{display: userDisplay}}>
                {/* <Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }} > */}
                   <Paragraph sx={userWelcomeTxt}>{`Currently logged user: ${userEmail}`}</Paragraph>
                {/* </Typist> */}
              </Box>

            </>);  
  };       

  export default RenderUserName;