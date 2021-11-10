import { StylePropertyValue } from "theme-ui";
import { Styles } from "../../styles/elements";

export interface PropsyCompProps {
    marginTop?: string | number;
    marginBottom?: string | number;
    width?: string | number;
    backgroundColor?: string; 
    progress?: number;
    onClickYes?: any; 
    onClickNo?: any;
    yesBtnAnimation?: any;
    noBtnAnimation?: any;
    yesBtnContent?: any;
    noBtnContent?: any; 
    tooltipYesId?: string;
    tooltipNoId?: string;
    tooltipYesTxt?: any; 
    tooltipNoTxt?: any;
    content?: string | JSX.Element | number;
    display?: string | undefined;
    margin?: string | number;
    animTime?: string | number;
    background?: string;
    animation?: string; 
    onClick?: any;                                
    isDisabled?: boolean; 
    opacity?: number | string 
    transition?: string
    type?: "button" | "submit" | "reset" |  undefined;                            
    borderRadius?: string | number;
    tooltipId?: string | number;
    tooltipTxt?: string;
    size?: string | number;
    position?: "absolute" | "relative" | "fixed" | undefined;
    top?: string | number;
    right?: string | number;
    left?: string | number;
    fontSize?: string | number;
    color?: string;
    sx?: Styles;
    children?: any;
    onSubmit?: any;
    tooltipText?: string;
    onChange?: any;
    placeholder?: string;
    fontFamily?: string;
    value?: string | number;
    text?: string; 
    wordWrap?: StylePropertyValue<any | undefined>
  };