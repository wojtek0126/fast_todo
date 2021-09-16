/** @jsxImportSource theme-ui */
import { 
  Button,
  Flex,  
  Box, 
  Textarea,
  Input,
  Select
  } from 'theme-ui';  

import ScrollTop from "react-scrolltop-button";  
import { BsArrowBarUp } from 'react-icons/bs'; 

import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem from './TodoItem';

import { useRef, useState } from 'react';

import { auth, firestore } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import { addTaskContainer,
         addTodoForm,
          btnAddTask,
          btnContainer,
          btnScrollUp,
          displayBar,
          inputTodoAdd,
          inputTodoSearch,         
          optionBox,
          todoFiltersContainer,
          todosContainer,
          todoStatusContainer } from '../styles/elements';
import { txtSearchInputEng, txtTodoInputEng } from '../content/content';
import SignOut from './SignOut';
import { iconAddTaskBtn } from '../content/icons';
require('firebase/auth');  


function TodoList() {
    const dummy = useRef<null | HTMLDivElement>(null); 
    const todosRef = firestore.collection('todos');
    const query = todosRef.orderBy('createdAt').limit(100);
  
    const [todos] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');

    const [searchByTxt, setSearchByTxt] = useState('');  

    const [filterCompleted, setFilterCompleted] = useState("Show");

    // const [filterDate, setFilterDate] = useState("New");


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
        id: getId(),
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        isCompleted: false,
        updatedAt: "Not updated yet",
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy!.current!.scrollIntoView({ behavior: 'smooth' }); 
    }
  
    return (<>          
          <Box sx={btnContainer} >
            <SignOut />  
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
                {/* <Select sx={optionBox} defaultValue="New" onChange={(e) => filteredDate(e.target.value)}>
                  <option value="New">New</option>
                  <option value="Old">Old</option>             
                </Select> */}
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
                  <Button type="submit" disabled={!formValue}
                sx={btnAddTask}
                >{iconAddTaskBtn}</Button>
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
        </>)
  }  
      
export default TodoList;     

// utility for creating unique Id
let id = 0
const getId = () => {
  return id++
}