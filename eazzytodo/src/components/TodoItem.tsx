/** @jsxImportSource theme-ui */
import { useState } from 'react';

import { Image, Flex, Textarea } from 'theme-ui'; 

import 'firebase/firestore';
import 'firebase/auth';
import { btnGradient,        
         btnSecondGradient,
         clickedBtnAnimJump,
         clickedBtnAnimShrink,
         inputTodoEdit,
         itemsBtnsContainer,         
         userImg } from '../styles/elements';
import { firestore } from '../firebase/firebase';
import { iconCompleteTaskBtn, iconDeleteTaskBtn, iconEditTaskBtn } from '../content/icons';
import PropsyBtn from './propsyComps/PropsyBtn';
import PropsyFlexBox from './propsyComps/PropsyFlexBox';
require('firebase/auth');  

type AppProps = {
  todo: any;     
}; 


function TodoItem(props: AppProps) {  
    const [ todoTxt, setTodoTxt ] = useState(props.todo.text);

    const [ animBtn1, setAnimBtn1 ] = useState("");
    const [ animBtn2, setAnimBtn2 ] = useState("");

    const [ opacity1, setOpacity1 ] = useState(1);

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
      setAnimBtn1(clickedBtnAnimJump);
      setTimeout(() => {
        setAnimBtn1("");
      }, 1000)
    };

    const onComplete = () => {      
        if (props.todo.isCompleted === false) {
          firestore.collection('todos').doc(props.todo.id).update({isCompleted: true});
          setBtnCompletedColor(btnSecondGradient);
        }        
        else {
          firestore.collection('todos').doc(props.todo.id).update({isCompleted: false});
          setBtnCompletedColor(btnGradient);
           }            
    };

    const onDelete = () => {
      setAnimBtn2(clickedBtnAnimShrink);
      setTimeout(() => {
        setAnimBtn2("");
      }, 1000);
      setOpacity1(0);
      setTimeout(() => {
        firestore.collection('todos').doc(props.todo.id).delete();   
      }, 2000);
    };
    
    
    return (<>  
      <PropsyFlexBox 
        opacity={opacity1}
        transition={'1s'}
        content={<>
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
                background={btnCompletedColor}
                click={onComplete}
                content={iconCompleteTaskBtn}
              />       
              <PropsyBtn 
                 background={btnGradient}
                 click={onUpdate}
                 content={iconEditTaskBtn}
                 animation={animBtn1} 
                 animTime={'1s'}               
              />
              <PropsyBtn 
                 background={btnGradient}
                 click={onDelete}
                 content={iconDeleteTaskBtn}
                 animation={animBtn2}
                 animTime={'2s'}

              />     
          </Flex>  
        </>}
      />   
    </>)
  }

  export default TodoItem;