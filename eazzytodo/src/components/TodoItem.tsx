/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react';
import { Image, Button, Flex, Input } from 'theme-ui';   

import 'firebase/firestore';
import 'firebase/auth';
import { btnPrimary, itemsBtnsContainer, todoInput, todoItemContainer, userImg } from '../styles/elements';
import { txtCompleteTaskBtnEng, txtDeleteTaskBtnEng, txtEditTaskBtnEng } from '../content/content';
import { firestore } from '../firebase/firebase';
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
        <Input sx={todoInput}
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
              >{txtCompleteTaskBtnEng}</Button>
               <Button 
              sx={btnPrimary} onClick={onUpdate}
              >{txtEditTaskBtnEng}</Button>
               <Button onClick={onDelete}
              sx={btnPrimary}
              >{txtDeleteTaskBtnEng}</Button>
          </Flex>             
      </Flex>
    </>)
  }

  export default TodoItem;