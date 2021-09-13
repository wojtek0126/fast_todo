  // unified styles control center, fused with theme-ui
  import background from '../assets/background.png'
  import { keyframes } from '@emotion/react'  

  
  type Styles = {
    [key: string]: any;
  };

  //common styles
  export const btnBorderRadius: string = '50%';
  export const btnGradient: string = 'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)';
  export const btnSecondGradient: string = 'linear-gradient(to right, #50C9C3 0%, #96DEDA  51%, #50C9C3  100%)';
  export const txtShadow: string = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

  //containers
  export const appContainer: Styles = {
    background: `url(${background})`,
    maxWidth: '100vw',
    minHeight: '100vh'    
  };

  export const signInContainer: Styles = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  };

  export const headerContainer: Styles = {
    display: 'flex',
    justtifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    textAlign: 'center'
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
    top: 140,
    left: 0,
    maxWidth: '100%',
    zIndex: 0
  };

  export const addTaskContainer: Styles = {  
    position: 'relative'     
  };

  export const itemsBtnsContainer: Styles = {      
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'    
  };

  export const todoItemContainer: Styles = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    backgroundColor: `todoBackground`,
    color: 'todoText',
    width: '80vw',
    wordBreak: 'break-word',
    position: 'relative',    
    marginLeft: '10px',
    padding: 2, 
    marginTop: 50,
    marginBottom: 80,
    minHeight: 100
  };

  export const btnContainer: Styles = {
    margin: '40px 0px'
  };

// buttons
export const btnPrimary: Styles = {
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
    // margin: '10px',
    padding: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',            
    boxShadow: '0 0 20px #eee',
    borderRadius: '50%',
    position: 'fixed',
    right: 0,
    bottom: 61,      
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
      bottom: 0,
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
  }

  export const inputTodoAdd: Styles = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    wordWrap: 'wrap',
    fontFamily: 'body',
    backgroundColor: 'inputBackground',
    color: 'text2',   
    borderRadius: '10px',
  };

  export const inputTodoEdit: Styles = { 
    fontFamily: 'body', 
    wordWrap: 'break-word',
    backgroundColor: 'transparent',
    border: 'none',
    maxWidth: '100%',
    paddingTop: 20,
    paddingLeft: 20
  } 

  //text
  export const bigTitleTxt: Styles = {
    alignSelf: 'center',
    fontSize: [12, 14, 16, 20],
    maxWidth: '100vw',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    textShadow: txtShadow,
    color: 'underwater',
    marginTop: 40,
    marginBottom: 40,
    };

  export const smallTitleTxt: Styles = {
    width: '100%',
    color: 'underwater',
    fontWeight: '600',
    textShadow: txtShadow,
    marginTop: 60,
    marginBottom: 60 
    };

// images    
  export const userImg: Styles = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '-16px',
    top: '-20px'
  };

// animations
export const clickedBtnAnim = keyframes`
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

 