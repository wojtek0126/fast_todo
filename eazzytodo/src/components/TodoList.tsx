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
import ReactLoading from 'react-loading';


import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem from './TodoItem';

import { useEffect, useRef, useState } from 'react';

import { auth, firestore } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import { addTaskContainer,
         addTodoForm,          
          welcomeUserWrapper,
          btnGradient,         
          btnScrollUp,
          displayBar,
          inputTodoAdd,
          inputTodoSearch,         
          optionBox,
          todoFiltersContainer,
          todoLisTWrapper,
          todosContainer,
          todoStatusContainer, 
          userWelcomeTxt,
          mockText,    
          } from '../styles/elements';
import { txtSearchInputEng, txtTodoInputEng } from '../content/content';
import { iconAddTaskBtn } from '../content/icons';
import SignOutButton from './UserAuth/SignOutButton';
import PropsyBtn from './propsyComps/PropsyBtn';
import { setTimeout } from 'timers';
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

  
    const RenderUserName = ({userName}: any) => {
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
                <div sx={{display: loadingDisplay}}>
                     <Paragraph sx={mockText}>
                     <ReactLoading type={'spin'} height={30} width={30} />
                     </Paragraph>
               </div>
              
              
                <div sx={{display: userDisplay}}>
                  <Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }} >
                     <Paragraph sx={userWelcomeTxt}>{`Currently logged user: ${userName}`}</Paragraph>
                  </Typist>
                </div>

              </>);  
    };       

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
  
    return (<Flex sx={todoLisTWrapper}>                 
          <Box sx={welcomeUserWrapper} >
            <RenderUserName userName={userEmail} />             
          </Box> 
          <Flex sx={{alignSelf: 'center'}}>
            <SignOutButton />  
          </Flex>  
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
                             tooltipTxt={'add task'} 
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
        </Flex>)
  }  
      
export default TodoList;     

