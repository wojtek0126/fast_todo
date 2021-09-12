/** @jsxImportSource theme-ui */
import { useState } from 'react';

import { Image, Button, Flex, Textarea } from 'theme-ui';   

import 'firebase/firestore';
import 'firebase/auth';
import { btnPrimary, inputTodoEdit, itemsBtnsContainer, todoItemContainer, userImg } from '../styles/elements';
import { firestore } from '../firebase/firebase';
import { iconCompleteTaskBtn, iconDeleteTaskBtn, iconEditTaskBtn } from '../content/icons';
require('firebase/auth');  

type AppProps = {
  todo: any;     
}; 


function TodoItem(props: AppProps) {  
    const [ todoTxt, setTodoTxt ] = useState(props.todo.text);
    const [ btnDisabled, setBtnDisabled ] = useState(false);

    const {  photoURL }: any = props.todo;       

    const onUpdate = () =>  firestore.collection('todos').doc(props.todo.id).update({text:  todoTxt});
    
    const onComplete = () => {
      firestore.collection('todos').doc(props.todo.id).update({isCompleted:  true});
      setBtnDisabled(true);
    } 

    const onDelete = () =>  firestore.collection('todos').doc(props.todo.id).delete();      

  
    return (<>  
      <Flex sx={todoItemContainer}>
        
        <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} sx={userImg} />
        <Textarea sx={inputTodoEdit}
             value={todoTxt}
             placeholder={todoTxt}
             onChange={e => {
              setTodoTxt(e.target.value);
             }}
        />
          <Flex sx={itemsBtnsContainer}>
          <Button disabled={btnDisabled}
              onClick={onComplete}
              sx={btnPrimary}
              >{iconCompleteTaskBtn}</Button>
               <Button 
              sx={btnPrimary} onClick={onUpdate}
              >{iconEditTaskBtn}</Button>
               <Button onClick={onDelete}
              sx={btnPrimary}
              >{iconDeleteTaskBtn}</Button>
          </Flex>             
      </Flex>
    </>)
  }

  export default TodoItem;