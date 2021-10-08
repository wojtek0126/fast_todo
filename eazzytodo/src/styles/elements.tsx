  // unified styles control center, fused with theme-ui
  import background from '../assets/background.png'
  import { keyframes } from '@emotion/react'  

  
  type Styles = {
    [key: string]: any;
  };

  //common styles
  export const btnBorderRadius: string = '50%';
  export const inputBorderRadius: string = '10px';
  export const boxBorderRadius: string = '10px';
  export const btnGradient: string = 'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)';
  export const btnCheckedGradient: string = 'linear-gradient(to right, #50C9C3 0%, #96DEDA  51%, #50C9C3  100%)';
  export const btnAlertgradient: string = 'linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)}';
  export const txtShadow: string = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
  export const itemBoxShadow: string = '24px 33px 46px 3px rgba(0,0,0,0.92)';   
   
   
  //containers
  export const appContainer: Styles = {
    // background: `url(${background})`,
    backgroundColor: 'appMainbackground',
    // backgroundBlendMode:'multiply,multiply',
    axWidth: '100vw',
    minHeight: '100vh'    
  };

  export const signInContainer: Styles = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  };

  export const signInFormContainer: Styles = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignSelf: 'center'
  };

  export const signLogContainer: Styles = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 780px)": { 
      flexDirection: 'column',
      position: 'relative'            
   }
  };

  export const titleContainer: Styles = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    color: 'text2',
    paddingTop: 60,
    fontSize: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'      
    };

  export const headerContainer: Styles = {
    display: 'flex',
    justtifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto'
  };

  export const todosContainer: Styles = {          
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '2',
    opacity: '0.85',     
  };

  export const waveEffectContainer: Styles = {  
    width: '100vw',
    position: 'absolute',
    top: 220,
    left: 0,
    maxWidth: '100%',
    zIndex: 0
  };

  export const waveEffectContainer2: Styles = {  
    width: '100vw',
    position: 'absolute',
    top: 200,
    left: 0,
    maxWidth: '100%',
    zIndex: 0
  };

  export const todoFiltersContainer: Styles = {  
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: boxBorderRadius,
    backgroundColor: `todoTaskBackground`,
    color: 'todoText',
    width: '80vw',
    wordBreak: 'break-word',
    position: 'relative',    
    padding: 2, 
    marginTop: 50,    
    minHeight: 100,
    boxShadow: itemBoxShadow   
  };

  export const todoStatusContainer: Styles = {  
    flexDirection: 'column',
    borderRadius: boxBorderRadius,
    backgroundColor: `todoTaskBackground`,
    color: 'todoText',
    width: '80vw',
    wordBreak: 'break-word',
    position: 'relative',   
    margin: 'auto', 
    padding: 2, 
    marginTop: 50,
    marginBottom: 80,
    minHeight: 100,
    boxShadow: itemBoxShadow   
  };

  export const addTaskContainer: Styles = {  
    position: 'relative'     
  };

  export const itemsBtnsContainer: Styles = {      
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap', 
    borderRadius: boxBorderRadius,
    backgroundColor: 'buttonsBackground' ,
    border:'1px solid',
    borderColor: 'borderColor'
  };

  export const todoItemContainer: Styles = {
    margin: 'auto', 
    flexDirection: 'column',
    borderRadius: boxBorderRadius,
    backgroundColor: `todoTaskbackground`,
    color: 'todoText',
    width: '100%',
    wordBreak: 'break-word',
    position: 'relative',    
    padding: 2, 
    marginTop: 50,
    marginBottom: 80,
    minHeight: 100,
    boxShadow: itemBoxShadow
  };

  export const welcomeUserWrapper: Styles = {
    margin: '0 auto'
  };

  export const displayBar: Styles = {    
    wordWrap: 'wrap',
    fontFamily: 'body',
    backgroundColor: 'inputBackground',
    color: 'text2',   
    borderRadius: inputBorderRadius,  
    marginTop: 1,
    padding: 2     
  };

  export const todoLisTWrapper: Styles= {
    flexDirection: 'column',
    width: '100vw'
  };

  export const editItemDateAndTaskTypeWrapper: Styles= {
    flexDirection: 'row',                           
    backgroundColor: 'buttonsBackground',
    borderRadius: boxBorderRadius,
    paddingLeft: 3,
    marginLeft: 1,
    position: 'relative',
           };

// buttons
export const btnPrimary: Styles = {
    display: 'flex',
    backgroundImage: btnGradient,
    cursor: 'pointer',
    margin: '10px',
    padding: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',            
    boxShadow: '0 0 20px #eee',
    borderRadius: btnBorderRadius,
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   }
  };

  export const btnScrollUp: Styles = {
    backgroundImage: btnGradient,
    cursor: 'pointer',
    padding: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',            
    boxShadow: '0 0 20px #eee',
    borderRadius: '50%',
    position: 'fixed',
    right: 8,
    bottom: 65,      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   }
  };

  export const btnAddTask: Styles = {
    position: 'fixed',
    bottom: 115,
    right: 0,
    backgroundImage: btnGradient,
    cursor: 'pointer',
    padding: '15px',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'text2',            
    boxShadow: '0 0 20px #eee',
    borderRadius: btnBorderRadius,      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   },
       "@media (max-width: 780px)": { 
      bottom: 1,
      opacity: 0.9              
   }
  };

  export const btnLogOut: Styles = {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: btnGradient,
    cursor: 'pointer',
    margin: '10px',
    padding: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',            
    boxShadow: '0 0 20px #eee',
    borderRadius: btnBorderRadius,      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   }
  };

// forms
  export const addTodoForm: Styles = {
    display: 'flex',  
    justifyContent: 'center',
    alignItems: 'center',   
    marginTop: '3',        
    position: 'fixed',
    right: 0,
    bottom: 0   
  };

  export const inputGeneral: Styles = {    
    wordWrap: 'wrap',
    fontFamily: 'body',
    backgroundColor: 'inputBackground',
    color: 'text2',   
    borderRadius: inputBorderRadius,
    margin: 0,
    marginTop: 2,
    padding: 2,
    width: '100%',
    alignSelf: 'center'
  };

  export const inputTodoAdd: Styles = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    wordWrap: 'wrap',
    fontFamily: 'body',
    backgroundColor: 'inputBackground',
    color: 'text2',   
    borderRadius: inputBorderRadius,
  };

  export const inputTodoSearch: Styles = {    
    wordWrap: 'wrap',
    fontFamily: 'body',
    backgroundColor: 'inputBackground',
    color: 'text2',   
    borderRadius: inputBorderRadius,
    margin: 0
  };

  export const inputTodoEdit: Styles = { 
    fontFamily: 'body', 
    wordWrap: 'break-word',
    backgroundColor: 'transparent',
    border: 'none',
    maxWidth: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    "@media (max-width: 780px)": { 
      marginTop: 20,
      marginBottom: 30            
   }
  } 

  export const optionBox: Styles = {    
    wordWrap: 'wrap',
    fontFamily: 'body',
    backgroundColor: 'inputBackground',
    color: 'text2',   
    borderRadius: inputBorderRadius,
    margin: '0 auto' ,
    alignSelf: 'center',
    "@media (max-width: 780px)": { 
     fontSize: 'small',              
   }
  };

  //text
  export const bigTitleTxt: Styles = {
    alignText: 'center',
    fontSize: [20, 14, 16, 20],
    // maxWidth: '80vw',
    // whiteSpace: 'pre-wrap',
    // wordBreak: 'break-word',
    textShadow: txtShadow,
    color: 'text2',    
    padding: 2
    };

    export const userWelcomeTxt: Styles = {
      alignSelf: 'center',
      fontSize: [12, 14, 16, 20],
      maxWidth: '100vw',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      textShadow: txtShadow,
      color: 'text2',
      marginTop: 40,
      marginBottom: 40,
      };

      export const mockText: Styles = {
        alignSelf: 'center',
        fontSize: [12, 14, 16, 20],
        maxWidth: '100vw',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        color: 'transparent',
        marginTop: 40,
        marginBottom: 40,
        };

  export const smallTitleTxt: Styles = {
    width: '100%',
    color: 'text2',
    fontWeight: '600',
    textShadow: txtShadow,  
    marginTop: '40px',    
    padding: 2
    };

    export const copyrightTxt: Styles = {
      width: '100%',
      color: 'text2',
      fontSize: 1,
      textAlign: 'center',
      textShadow: txtShadow,  
      marginBottom: 10,
      padding: 1
      };

    export const loginSignupTxt: Styles = {
      width: '100%',
      color: 'text2',
      fontWeight: '600',
      textShadow: txtShadow,
      marginTop: 10,
      marginBottom: 10 
      };

// avatar and user details 
  export const userImg: Styles = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '-16px',
    top: '-20px'
  };

  export const userName: Styles = {
    borderRadius: boxBorderRadius,
    width: '200px',
    maxWidth: '240px',
    overflow: 'hidden',
    padding: 1,
    position: 'absolute',
    left: '40px',
    top: '-20px',
    backgroundColor: 'userBackground'
  };

// animations
export const clickedBtnAnimJump = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
` ;

export const clickedBtnAnimShrink = keyframes`
from {
  transform: scale(1);
}
to {
  transform: scale(0);
}
` ;

 