/** @jsxImportSource theme-ui */
import { useState, useCallback } from 'react';

import { Image, Flex, Textarea, Paragraph } from 'theme-ui'; 

import 'firebase/firestore';
import 'firebase/auth';
import { btnGradient,        
         btnCheckedGradient,
         clickedBtnAnimJump,
         clickedBtnAnimShrink,
         inputTodoEdit,
         itemsBtnsContainer,         
         userImg, 
         userName} from '../styles/elements';
import { firestore } from '../firebase/firebase';
import { iconCompleteTaskBtn, iconDeleteTaskBtn, iconEditTaskBtn } from '../content/icons';
import PropsyBtn from './propsyComps/PropsyBtn';
import PropsyFlexBox from './propsyComps/PropsyFlexBox';
import firebase from 'firebase';
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
        return btnCheckedGradient;
      }
      else {
        return btnGradient;
      }
    });    

    const {  photoURL }: any = props.todo;    

    
    const onUpdate = useCallback(
      () => {
        firestore.collection('todos').doc(props.todo.id).update({text: todoTxt,
           updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        setAnimBtn1(clickedBtnAnimJump);
        setTimeout(() => {
          setAnimBtn1("");
        }, 1000)
      },
      [props],
    );  

    const onComplete = useCallback(
      () => {
        if (props.todo.isCompleted === false) {
          firestore.collection('todos').doc(props.todo.id).update({isCompleted: true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),            
          });
          setBtnCompletedColor(btnCheckedGradient);
        }        
        else {
          firestore.collection('todos').doc(props.todo.id).update({isCompleted: false,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setBtnCompletedColor(btnGradient);
           }  
      },
      [props],
    );
    
    const onDelete = useCallback(
      () => {
        setAnimBtn2(clickedBtnAnimShrink);
        setTimeout(() => {
          setAnimBtn2("");
        }, 1000);
        setOpacity1(0);
        setTimeout(() => {
          firestore.collection('todos').doc(props.todo.id).delete();   
        }, 2000);
      },
      [props],
    );   
    
    const userNameParsedFunc = useCallback(() => {
      const userNameParsed = props.todo.userName.match(/^(.+)@/)[1];
      return userNameParsed;
    },[props])

    return (<>  
      <PropsyFlexBox 
        opacity={opacity1}
        width={'80vw'}
        transition={'1s'}
        marginBottom={"60px"}
        content={<>
  <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} sx={userImg} />
  <Paragraph sx={userName}>{userNameParsedFunc()}</Paragraph>
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
                onClick={onComplete}
                content={iconCompleteTaskBtn}
              />       
              <PropsyBtn 
                 background={btnGradient}
                 onClick={onUpdate}
                 content={iconEditTaskBtn}
                 animation={animBtn1} 
                 animTime={'1s'}               
              />
              <PropsyBtn 
                 background={btnGradient}
                 onClick={onDelete}
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