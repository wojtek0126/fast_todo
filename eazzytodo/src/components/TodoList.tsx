/** @jsxImportSource theme-ui */
import { 
  Button,
  Flex,
  Input,
  Box 
  } from 'theme-ui';  

import { useCollectionData } from 'react-firebase-hooks/firestore';  

import TodoItem from './TodoItem';

import { useRef, useState } from 'react';

import { auth, firestore } from '../firebase/firebase'; 
import firebase from 'firebase';
import 'firebase/firestore';
import { btnContainer, btnPrimary, form, input, todosContainer } from '../styles/elements';
import { txtAddTaskBtnEng, txtTodoInputEng } from '../content/content';
import SignOut from './SignOut';
require('firebase/auth');      
    

function TodoList() {
    const dummy = useRef<null | HTMLDivElement>(null); 
    const todosRef = firestore.collection('todos');
    const query = todosRef.orderBy('createdAt').limit(100);
  
    const [todos] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
      
  
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
            {todos && todos.map(task => <TodoItem key={task.id} todo={task} />)}
      
            <span ref={dummy}></span>
      
          </Flex>  
          <form className='form' onSubmit={sendTodo} >
            <Flex  sx={form}>
              <Input sx={input}
                     value={formValue}
                     onChange={(e: any) => setFormValue(e.target.value)} 
                     placeholder={txtTodoInputEng}               
              />
          <Flex> 
              <Button type="submit" disabled={!formValue}
              sx={btnPrimary}
              >{txtAddTaskBtnEng}</Button>
          </Flex>         
            </Flex>
          </form>            
        </>)
  }  
      
export default TodoList;     

// utility for creating unique Id
let id = 0
const getId = () => {
  return id++
}