import { Container, Flex } from "@theme-ui/components";
import { useEffect, useState } from "react";
import { loadingBox, userWelcomeTxt } from "../../styles/elements";

import ReactLoading from 'react-loading';

import TypistText from "./TypistText";


const RenderUserName = () => {
    const userEmail = localStorage.getItem('userEmail'); 
    const [loadingDisplay, setLoadingDisplay] = useState('flex');
    const [userDisplay, setUserDisplay] = useState('none');
    const timeoutTime = 100;
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
                <TypistText typistText={`Currently logged user: ${userEmail}`} typistStyle={userWelcomeTxt} />               
              </Container>

            </>);  
  };       

  export default RenderUserName;