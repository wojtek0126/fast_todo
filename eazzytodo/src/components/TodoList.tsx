/** @jsxImportSource theme-ui */
import { 
  Flex,  
  Box, 
  Textarea,
  Input,
  Select,
  Paragraph
  } from 'theme-ui';  

import ScrollTop from "react-scrolltop-button";  
import { BsArrowBarUp } from 'react-icons/bs'; 
import Typist from 'react-typist';


import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem from './TodoItem';

import { useRef, useState } from 'react';

import { auth, firestore } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import { addTaskContainer,
         addTodoForm,          
          btnContainer,
          btnGradient,         
          btnScrollUp,
          displayBar,
          inputTodoAdd,
          inputTodoSearch,         
          optionBox,
          todoFiltersContainer,
          todosContainer,
          todoStatusContainer, 
          userWelcomeTxt,    
          } from '../styles/elements';
import { txtSearchInputEng, txtTodoInputEng } from '../content/content';
import { iconAddTaskBtn } from '../content/icons';
import SignOutButton from './UserAuth/SignOutButton';
import PropsyBtn from './propsyComps/PropsyBtn';
require('firebase/auth');  


function TodoList() {
    const dummy = useRef<null | HTMLDivElement>(null); 
    const todosRef = firestore.collection('todos');
    const query = todosRef.orderBy('createdAt').limit(100);
  
    const [todos] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');

    const [searchByTxt, setSearchByTxt] = useState('');  

    const [filterCompleted, setFilterCompleted] = useState("Show"); 

    const userEmail = localStorage.getItem('userEmail');    
    

const getPrecentCompleted: any = (data: any, precision: number) => {
  let alltodos: any = data?.length;
  let completed: any = data?.filter((item: any) => item.isCompleted).length;
  let percentage = alltodos === 0 ? 0 : (completed / alltodos) * 100
      return  parseFloat(percentage.toFixed(precision));  
};

const filteredStatus = (status: string): any => {
  setFilterCompleted(status);
};

const renderFiltered = (data: any, filterCompleted: string, searchBy: string): JSX.Element => {
  const TodoJsx = (keyId: any, todo: any): JSX.Element => {
    return <TodoItem key={keyId} todo={todo} />;
   };
  const searchIt = (task: any, searchItTxt: string) => {
    return task.includes(searchItTxt);
  };

    switch (filterCompleted) {
    case "Show all":
      return data && data.filter((task: any) => 
      searchIt(task.text, searchBy))
      .map((task: any): JSX.Element => TodoJsx(task.id, task));
    case "In progress only":
      return data && data.filter((task: any): JSX.Element => 
      searchIt(task.text, searchBy) && task.isCompleted === false)
      .map((task: any): JSX.Element => TodoJsx(task.id, task));       
    case "Completed only":
      return data && data.filter((task: any) => 
      searchIt(task.text, searchBy) && task.isCompleted === true)
      .map((task: any): JSX.Element => TodoJsx(task.id, task)); 
    default:
      return data && data.filter((task: any) => 
      searchIt(task.text, searchBy))
      .map((task: any): JSX.Element => TodoJsx(task.id, task));
  };
}

    const sendTodo = async (e: any) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser!;
  
      await todosRef.add({
        userName: userEmail,        
        type: "Task",
        assignedTo: "Not assigned yet",
        assignedBy: "Not set yet",
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        isCompleted: false,
        updatedAt: "Not updated yet",
        completedAt: "Not completed yet",
        deadline: "No deadline set",
        uid,
        photoURL
      })
  
      setFormValue('');
      if (dummy) dummy!.current!.scrollIntoView({ behavior: 'smooth' }); 
    }
  
    return (<Box sx={{width: '100vw'}}>   
     <Box sx={{position: 'absolute', top: 0, opacity: 0.6, zIndex: 0}}>
     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1"
      d="M0,256L60,218.7C120,181,240,107,360,69.3C480,32,600,32,720,37.3C840,43,960,53,1080,85.3C1200,117,
      1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,
      360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
              </Box>          
          <Box sx={btnContainer} >
            <Typist>
             <Paragraph sx={userWelcomeTxt}>{`Currently logged user: ${userEmail}`}</Paragraph>
            </Typist>            
            <SignOutButton />  
          </Box>        
          <Flex id={'main'} sx={todosContainer}>
            <Flex sx={todoFiltersContainer} >
              <Input sx={inputTodoSearch}
                    type={'text'}
                    placeholder={txtSearchInputEng}
                    onChange={(e) => setSearchByTxt(e.target.value)} />
              <Flex sx={{
                flexDirection: 'row',
                alignSelf: 'baseline',
                marginTop: 2
              }} >
                <Select sx={optionBox} defaultValue="Show all" onChange={(e) => filteredStatus(e.target.value)}>
                  <option value="Show all" >{`Show all`}</option>
                  <option value="In progress only" >In progress only</option>
                  <option value="Completed only" >Completed only</option>           
                </Select>           
              </Flex>
         
            </Flex>
            <Flex sx={todoStatusContainer} >
             <Box sx={displayBar}>
               
               {`All tasks: ${todos?.length}`}

             </Box>
             <Box sx={displayBar}>
             
               {`In progress: ${todos?.filter((item) => !item.isCompleted).length}`}

             </Box>
             <Box sx={displayBar}>
               
               {`Completed: ${todos?.filter((item) => item.isCompleted).length}`}                      
             
             </Box>
             <Box sx={displayBar}>
               
               {`You have finished ${getPrecentCompleted(todos)}% of the job`}            
             
             </Box>
            </Flex>             

             {renderFiltered(todos, filterCompleted, searchByTxt)}

            <span ref={dummy}></span>
      
          </Flex>  
          <form className='form' onSubmit={sendTodo} >
              <Flex  sx={addTodoForm}>
                <Box sx={addTaskContainer}>
                <Textarea sx={inputTodoAdd}                     
                      onChange={(e: any) => setFormValue(e.target.value)} 
                      placeholder={txtTodoInputEng}               
                >{formValue}
                </Textarea>               
                  <PropsyBtn type={"submit"}
                             tooltipId={'add'}
                             tooltipTxt={'add this task'} 
                             isDisabled={!formValue}
                             background={btnGradient}
                             content={iconAddTaskBtn} />               
                </Box>             
              <Flex>            
          </Flex>         
            </Flex>
          </form>  
          <ScrollTop
        text={<BsArrowBarUp />}
        distance={0}
        breakpoint={0}
        style={btnScrollUp}
        className="scroll-your-role"
        speed={1000}
        target={75}
        icon={<BsArrowBarUp />}
      />          
        </Box>)
  }  
      
export default TodoList;     

