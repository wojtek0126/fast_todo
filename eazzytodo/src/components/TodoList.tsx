/** @jsxImportSource theme-ui */
import { 
  Flex,  
  Box, 
  Textarea,
  Input,
  Select,
  Container,  
  } from 'theme-ui'; 
  
import ReactLoading from 'react-loading';

import ScrollTop from "react-scrolltop-button";  
import { BsArrowBarUp } from 'react-icons/bs'; 

import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem, { Todo } from './TodoItem';

import { ChangeEvent, useRef, useState } from 'react';

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
          clickedBtnAnimShrink,
          displayStatusBar,
          loadingBox,             
          } from '../styles/elements';
import { txtSearchInputEng, txtTodoInputEng } from '../content/content';
import { iconAddTaskBtn } from '../content/icons';
import SignOutButton from './UserAuth/SignOutButton';
import PropsyBtn from './propsyComps/PropsyBtn';
import { setTimeout } from 'timers';
import RenderUserName from './propsyComps/RenderUserName';
import ProgressBar from './propsyComps/ProgressBar';
import { useSetRecoilState } from 'recoil';
import { todosRecoil } from '../recoil/recoil';
// import { Data } from 'react-firebase-hooks/firestore/dist/firestore/types';
require('firebase/auth');  

export type UserEmail = {
  userEmail?: string;
}


function TodoList() {
    const userEmail: string | null = localStorage.getItem('userEmail'); 
    const dummy = useRef<null | HTMLDivElement>(null); 
    const todosRef = firestore.collection('todos');
    const query = todosRef.orderBy('createdAt').limit(100);
  
    const [todos] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');

    const [searchByTxt, setSearchByTxt] = useState('');  

    const [filterCompleted, setFilterCompleted] = useState("Show");   
    
    const [animBtn1, setAnimBtn1] = useState("");

    const setTodosRecoil = useSetRecoilState(todosRecoil);


const getPrecentCompleted: any = (data: [], precision: number) => {
  let alltodos: number = data?.length;
  let completed: number = data?.filter((item: Todo) => item.isCompleted).length;
  let percentage = alltodos === 0 ? 0 : (completed / alltodos) * 100;
  let resultPercent = parseFloat(percentage.toFixed(precision));
  setTodosRecoil(resultPercent);    
  return  resultPercent;      
};

const filteredStatus = (status: string) => {
  setFilterCompleted(status);
};

const renderFiltered = (data: any, filterCompleted: string, searchBy: string) => {
  const TodoJsx = (keyId: string | undefined, todo: Todo): JSX.Element => {
    return <TodoItem key={keyId} todo={todo} />;
   };
  const searchIt = (task: string | boolean, searchItTxt: string) => {
    if (typeof task === 'string') {
      return task.includes(searchItTxt);
    }; 
  };

    switch (filterCompleted) {
    case "Show all":
      return data && data.filter((task: Todo) => 
      searchIt(task.text, searchBy))
      .map((task: Todo): JSX.Element => TodoJsx(task.id, task));
    case "In progress only":
      return data && data.filter((task: Todo) => 
      searchIt(task.text, searchBy) && task.isCompleted === false)
      .map((task: Todo): JSX.Element => TodoJsx(task.id, task));       
    case "Completed only":
      return data && data.filter((task: Todo) => 
      searchIt(task.text, searchBy) && task.isCompleted === true)
      .map((task: Todo): JSX.Element => TodoJsx(task.id, task)); 
    default:
      return data && data.filter((task: Todo) => 
      searchIt(task.text, searchBy))
      .map((task: Todo): JSX.Element => TodoJsx(task.id, task));
  };
};

const userNameParsedFunc = (userEmail: any) => { 
    const userNameParsed = userEmail.match(/^(.+)@/)[1]; 
  return userNameParsed;
};

    const sendTodo = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser!;
  
      await todosRef.add({
        userName: userNameParsedFunc(userEmail),        
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
      });    
      setFormValue(""); 
      
      if (dummy) dummy!.current!.scrollIntoView({ behavior: 'smooth' }); 
    };

    const handleAddTaskInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setFormValue(e.target.value);
    };

    const handleAddTaskButtonClick = () => {
      setAnimBtn1(clickedBtnAnimShrink);
      setTimeout(() => {
        setAnimBtn1(""); 
        setFormValue("");       
      }, 1000);   
    };

    if (!todos) {
      return (
        <Flex sx={todoLisTWrapper}>
              <Container>
                   <Flex sx={loadingBox}>
                     <ReactLoading type={'spin'} height={30} width={30} />
                   </Flex>
             </Container>  
        </Flex>  
      )
    }  
    return (<Flex sx={todoLisTWrapper}>                 
          <Box sx={welcomeUserWrapper} >
            <RenderUserName />             
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
             <Box sx={displayStatusBar}>

               <ProgressBar progress={getPrecentCompleted(todos)} />
                 
               <Box sx={{position: 'absolute',
                         width: '100%',
                         bottom: 10,
                         left: 0,
                         fontSize: [12, 14, 20]}}
                >
                   {`You have finished ${getPrecentCompleted(todos)}% of the job`}  
               </Box>
            
               
             
             </Box>
            </Flex>             

             {renderFiltered(todos, filterCompleted, searchByTxt)}

            <span ref={dummy}></span>
      
          </Flex>  
          <form className='form' onSubmit={sendTodo} >
              <Flex  sx={addTodoForm}>
                <Box sx={addTaskContainer}>
                <Textarea sx={inputTodoAdd} 
                      value={formValue}
                      // onBlur={handleClearValue}                
                      onChange={handleAddTaskInputValue} 
                      placeholder={txtTodoInputEng}               
                >
                </Textarea>               
                  <PropsyBtn type={"submit"}
                             tooltipId={'add'}
                             tooltipTxt={'add task'} 
                             animation={animBtn1} 
                             animTime={'1s'} 
                             onClick={handleAddTaskButtonClick}   
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

