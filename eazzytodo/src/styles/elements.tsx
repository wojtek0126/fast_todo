  // unified styles control center, fused with theme-ui
  
  type Styles = {
    [key: string]: any;
  };

  //common styles
  const btnBorderRadius: string = '50%';

  //containers
  export const todosContainer: Styles = {          
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '2',
    opacity: '0.85',     
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
    backgroundImage:'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
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
    backgroundImage:'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
    cursor: 'pointer',
    margin: '10px',
    padding: '15px 45px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',            
    boxShadow: '0 0 20px #eee',
    borderRadius: btnBorderRadius,
    position: 'absolute',
    left: 0,
    bottom: 0,      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   }
  };

  export const btnAddTask: Styles = {
    position: 'fixed',
    bottom: 100,
    right: 0,
    backgroundImage:'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
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
    backgroundImage:'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)',
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
    maxWidth: '75%'
  } 

  //text
  export const bigTitleTxt: Styles = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    color: 'text2',
    marginTop: 80,
    marginBottom: 80,
    fontSize: '40px'      
    };

  export const smallTitleTxt: Styles = {
    color: 'text2',
    fontWeight: '600',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
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

 