/** @jsxImportSource theme-ui */
import { useState, useCallback, useEffect } from 'react';

import { Image, Flex, Textarea, Paragraph, Select } from 'theme-ui'; 

import 'firebase/firestore';
import 'firebase/auth';
import { btnGradient,        
         btnCheckedGradient,
         clickedBtnAnimJump,
         clickedBtnAnimShrink,
         inputTodoEdit,
         itemsBtnsContainer,         
         userImg, 
         userName,
         optionBox} from '../styles/elements';
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

    const [ taskTypeColor, setTaskTypeColor ] = useState("todoTaskBackground");

    useEffect(() => {
      if (props.todo.type === "Task") {
        setTaskTypeColor("todoTaskBackground"); 
      }
      else if (props.todo.type === "Idea") {
        setTaskTypeColor("todoIdeaBackground"); 
      }
      else if (props.todo.type === "Problem") {
        setTaskTypeColor("todoProblemBackground"); 
      }
      else if (props.todo.type === "Recipe") {
        setTaskTypeColor("todoRecipeBackground");
      }
      else if (props.todo.type === "Schedule") {
        setTaskTypeColor("todoScheduleBackground");        
      } 
    }, [])


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
      [todoTxt],
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
    },[props]);

  
    const handleTaskTypeChange = useCallback((e: any) => {
      if (e.target.value === "Task") {
        setTaskTypeColor("todoTaskBackground");
        firestore.collection('todos').doc(props.todo.id).update({type: "Task",
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
      else if (e.target.value === "Idea") {
        setTaskTypeColor("todoIdeaBackground");
        firestore.collection('todos').doc(props.todo.id).update({type: "Idea",
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      }
      else if (e.target.value === "Problem") {
        setTaskTypeColor("todoProblemBackground");
        firestore.collection('todos').doc(props.todo.id).update({type: "Problem",
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      }
      else if (e.target.value === "Recipe") {
        setTaskTypeColor("todoRecipeBackground");
        firestore.collection('todos').doc(props.todo.id).update({type: "Recipe",
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      }
      else if (e.target.value === "Schedule") {
        setTaskTypeColor("todoScheduleBackground");
        firestore.collection('todos').doc(props.todo.id).update({type: "Schedule",
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      }
    },[props]);


    return (<>  
      <PropsyFlexBox 
        opacity={opacity1}
        width={'80vw'}
        transition={'1s'}
        marginBottom={"80px"}
        backgroundColor={taskTypeColor}
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
               tooltipId={'status'}
               tooltipTxt={'switch completion status'}
                background={btnCompletedColor}
                onClick={onComplete}
                content={iconCompleteTaskBtn}
              />       
              <PropsyBtn 
                 tooltipId={'update'}
                 tooltipTxt={'confirm content update'}
                 background={btnGradient}
                 onClick={onUpdate}
                 content={iconEditTaskBtn}
                 animation={animBtn1} 
                 animTime={'1s'}               
              />
              <PropsyBtn 
                 tooltipId={'delete'}
                 tooltipTxt={'delete this task'}
                 background={btnGradient}
                 onClick={onDelete}
                 content={iconDeleteTaskBtn}
                 animation={animBtn2}
                 animTime={'2s'}
              />    
               <Select sx={optionBox} defaultValue={props.todo.type}
                                      onChange={handleTaskTypeChange} >
                  <option value="Task" >Task</option>
                  <option value="Idea" >Idea</option>
                  <option value="Problem" >Problem</option> 
                  <option value="Schedule" >Schedule</option> 
                  <option value="Recipe" >Recipe</option>           
                </Select>     
          </Flex>  
        </>}
      />   
    </>)
  }

  export default TodoItem;