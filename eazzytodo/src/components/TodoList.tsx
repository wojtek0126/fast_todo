/** @jsxImportSource theme-ui */
import { 
  Button,
  Flex,  
  Box, 
  Textarea,
  Input
  } from 'theme-ui';  

import ScrollTop from "react-scrolltop-button";  
import { BsArrowBarUp } from 'react-icons/bs'; 

import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem from './TodoItem';

import { useRef, useState } from 'react';

import { auth, firestore } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import { addTaskContainer, addTodoForm, btnAddTask, btnContainer, btnScrollUp, displayBar, inputTodoAdd, inputTodoSearch, todosContainer, todoSearchContainer, todoStatusContainer } from '../styles/elements';
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

    const [ searchByTxt, setSearchByTxt ] = useState('');

  
    const sendTodo = async (e: any) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser!;
  
      await todosRef.add({
        id: getId(),
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        isCompleted: false,
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
            <Flex sx={todoSearchContainer} >
             <Input sx={inputTodoSearch}
                    type={'text'}
                    placeholder={txtSearchInputEng}
                    onChange={(e) => setSearchByTxt(e.target.value)} />
            </Flex>
           
            {todos && todos.filter(task => task.text.includes(searchByTxt)).map(task => <TodoItem key={task.id} todo={task} />)}      

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