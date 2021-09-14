/** @jsxImportSource theme-ui */
import { useState } from 'react';

import { Image, Flex, Textarea } from 'theme-ui'; 

import 'firebase/firestore';
import 'firebase/auth';
import { btnGradient,        
         btnSecondGradient,
         clickedBtnAnim,
         inputTodoEdit,
         itemsBtnsContainer,
         todoItemContainer,
         userImg } from '../styles/elements';
import { firestore } from '../firebase/firebase';
import { iconCompleteTaskBtn, iconDeleteTaskBtn, iconEditTaskBtn } from '../content/icons';
import PropsyBtn from './propsyComps/PropsyBtn';
require('firebase/auth');  

type AppProps = {
  todo: any;     
}; 


function TodoItem(props: AppProps) {  
    const [ todoTxt, setTodoTxt ] = useState(props.todo.text);
    const [ btnDisabled, setBtnDisabled ] = useState(false);
    const [ anim, setAnim ] = useState("");
    const [ btnCompletedColor, setBtnCompletedColor ] = useState(() => {
      if (props.todo.isCompleted === true) {
        return btnSecondGradient;
      }
      else {
        return btnGradient;
      }
    });    

    const {  photoURL }: any = props.todo;  
    

    const onUpdate = () =>  {
      firestore.collection('todos').doc(props.todo.id).update({text:  todoTxt});
      setAnim(clickedBtnAnim);
      setTimeout(() => {
          setAnim("");
      }, 2000)
    };

    const onComplete = () => {
      firestore.collection('todos').doc(props.todo.id).update({isCompleted: true});
      setBtnDisabled(true);
      setBtnCompletedColor(btnSecondGradient);
    } 

    const onDelete = () =>  firestore.collection('todos').doc(props.todo.id).delete();      

  
    return (<>  
      <Flex sx={todoItemContainer}>        
        <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} sx={userImg} />
        <Textarea sx={inputTodoEdit}
             defaultValue={todoTxt}
             placeholder={todoTxt}
             onChange={e => {
              setTodoTxt(e.target.value);
             }}
        />
          <Flex sx={itemsBtnsContainer}>      
              <PropsyBtn 
                isDisabled={btnDisabled} 
                background={btnCompletedColor}
                click={onComplete}
                content={iconCompleteTaskBtn}
              />       
              <PropsyBtn 
                 background={btnGradient}
                 click={onUpdate}
                 content={iconEditTaskBtn}
                 animation={anim}
              />
              <PropsyBtn 
                 background={btnGradient}
                 click={onDelete}
                 content={iconDeleteTaskBtn}
              />     
          </Flex>             
      </Flex>
    </>)
  }

  export default TodoItem;