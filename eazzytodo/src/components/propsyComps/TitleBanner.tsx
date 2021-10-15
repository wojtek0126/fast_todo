import { Flex, Paragraph } from "@theme-ui/components";
import { copyrightTxt, titleContainer } from "../../styles/elements";

const TitleBanner = () => {
    return (
        <Flex sx={titleContainer}>
          <Paragraph sx={{fontFamily: 'body'}}>The
        </Paragraph>
        <Paragraph sx={{
            fontFamily: 'body',
            color: 'text3'
          }}>Eazzy</Paragraph>
          <Paragraph sx={{
            fontFamily: 'body',
            color: 'text4'
          }}>Todo</Paragraph>
          <Paragraph sx={copyrightTxt}>© 2021 HFM</Paragraph>            
    </Flex>
        )  
}

export default TitleBanner;