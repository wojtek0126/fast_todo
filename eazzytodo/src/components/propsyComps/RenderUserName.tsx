import { Container, Flex, Paragraph } from "@theme-ui/components";
import { useEffect, useState } from "react";
import { loadingBox, userWelcomeTxt } from "../../styles/elements";

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

              <Container sx={{display: loadingDisplay}}>
                   <Flex sx={loadingBox}>
                     <ReactLoading type={'spin'} height={30} width={30} />
                   </Flex>
             </Container>            
            
              <Container sx={{display: userDisplay}}>
                   <Paragraph sx={userWelcomeTxt}>{`Currently logged user: ${userEmail}`}</Paragraph>
              </Container>

            </>);  
  };       

  export default RenderUserName;