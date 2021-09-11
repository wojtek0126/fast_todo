export const btnPrimary: any = {
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
    borderRadius: '10px',      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   }
  };

  export const btnScrollUp: any = {
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
    borderRadius: '10px',
    position: 'absolute',
    left: 0,
    bottom: 0,      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   }
  };

  export const btnSubmit: any = {
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
    borderRadius: '10px',      
    '&:hover, &:focus': {  
      backgroundPosition: 'right center', 
      color: '#fff',
      textDecoration: 'none'
   },
   paddingRight: 60,
   marginRight: 67,
   "@media (max-width: 500px)": { 
     position: 'absolute',         
     marginRight: 4,
     right: -25,
     bottom: 12,
     padding: 15,
     height: 50
  }
  };

  export const todosContainer: any = {          
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '2',
    opacity: '0.85',     
  };

  export const form: any = {
    display: 'flex',  
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginTop: '3',        
    position: 'fixed',
    left: 0,
    bottom: 0   
  }

  export const input: any = {
    backgroundColor: 'inputBackground',
    color: 'text2',
    margin: '20px',
    marginTop: '30px',
    borderRadius: '10px',
    marginLeft: 77,
    "@media (max-width: 500px)": { 
      width: '70vw',     
      marginLeft: 50,
      marginRight: 50,
      height: 50,
      marginBottom: 26           
   }
  };

  export const bigTitleTxt: any = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    color: 'text2',
    marginTop: 80,
    marginBottom: 20,
    fontSize: '40px'      
    };

  export const smallTitleTxt: any = {
    color: 'text2',
    fontWeight: '600',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    marginTop: 20,
    marginBottom: 20 
    };

  export const userImg: any = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '-25px',
    top: '-20px'
  };

  export const itemsBtnsContainer: any = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'    
  };

  export const todoItemContainer: any = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: `todoBackground`,
    color: 'todoText',
    width: '80vw',
    wordBreak: 'break-word',
    position: 'relative',    
    margin: '30px',
    padding: '2', 
    marginBottom: '70px' 
  };