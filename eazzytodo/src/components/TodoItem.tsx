/** @jsxImportSource theme-ui */
import { useState, useCallback, useEffect, ChangeEvent } from 'react';

import { Image, Textarea, Paragraph, Select, Flex } from 'theme-ui'; 

import ReactTooltip from 'react-tooltip';

import 'firebase/firestore';
import 'firebase/auth';
import { btnGradient,        
         btnCheckedGradient,
         clickedBtnAnimJump,         
         inputTodoEdit,
         itemsBtnsContainer,         
         userImg,         
         optionBox,
         clickedBtnAnimShrink,
         editItemDateAndTaskTypeWrapper,
         userNameInTask} from '../styles/elements';
import { firestore } from '../firebase/firebase';
import { iconCompleteTaskBtn, iconDateBtn,  iconDeleteTaskBtn, iconEditTaskBtn } from '../content/icons';
import PropsyBtn from './propsyComps/PropsyBtn';
import PropsyFlexBox from './propsyComps/PropsyFlexBox';
import firebase from 'firebase';
import PropsyInput from './propsyComps/PropsyInput';
import React from 'react';
import { handleButtonAnimation } from './UserAuth/SignOutButton';
require('firebase/auth');  

export interface Todo {
  isCompleted: boolean,
  uid: string,
  text: string,
  type: string,
  deadline: string,
  id: string | undefined,
  userName: string,
  photoURL: string | null,
  includes?: string, 
  match?: boolean
};

type AppProps = {
  todo: Todo;     
}; 

const TodoItem = (props: AppProps) => {  
    const [ todoTxt, setTodoTxt ] = useState("");
    const [ deadline, setDeadline ] = useState("");

    const [ animBtn1, setAnimBtn1 ] = useState("");
    const [ animBtn2, setAnimBtn2 ] = useState("");
    const [ animBtn3, setAnimBtn3 ] = useState("");

    const [ opacity1, setOpacity1 ] = useState(1);

    const [ taskTypeColor, setTaskTypeColor ] = useState("todoTaskBackground");

    const [ btnCompletedColor, setBtnCompletedColor ] = useState(() => {
      if (props.todo.isCompleted === true) {
        return btnCheckedGradient;
      }
      else {
        return btnGradient;
      }
    });    

    const {  photoURL } = props.todo;    

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
      setTodoTxt(props.todo.text);
      setDeadline(props.todo.deadline);
    },[props.todo.type, props.todo.text, props.todo.deadline] );

    const updateFirestoreData = (collection: string, item: string | undefined, data: string, keyValue: string | boolean) => {
      firestore.collection(collection).doc(item).update({[data]: keyValue,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    };
    
    const onUpdate = useCallback(
      () => {
          updateFirestoreData('todos', props.todo.id, 'text', todoTxt);       
          handleButtonAnimation(setAnimBtn1, clickedBtnAnimJump, 1000);
      },
      [todoTxt, props.todo.id],
    );  

    const onComplete = useCallback(
      () => {
        if (props.todo.isCompleted === false) {
          updateFirestoreData('todos', props.todo.id, 'isCompleted', true);           
          setBtnCompletedColor(btnCheckedGradient);
        }        
        else if (props.todo.isCompleted === true){
          updateFirestoreData('todos', props.todo.id, 'isCompleted', false);
          setBtnCompletedColor(btnGradient);
           }  
      },
      [props],
    );
    
    const onDelete = useCallback(
      () => {
        handleButtonAnimation(setAnimBtn2, clickedBtnAnimShrink, 1000);
        setOpacity1(0);
        setTimeout(() => {
          firestore.collection('todos').doc(props.todo.id).delete();   
        }, 2000);
      },
      [props],
    );  
  
    const handleTaskTypeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === "Task") {
        setTaskTypeColor("todoTaskBackground");
        updateFirestoreData('todos', props.todo.id, 'type', "Task");       
      }
      else if (e.target.value === "Idea") {
        setTaskTypeColor("todoIdeaBackground");
        updateFirestoreData('todos', props.todo.id, 'type', "Idea");    
      }
      else if (e.target.value === "Problem") {
        setTaskTypeColor("todoProblemBackground");
        updateFirestoreData('todos', props.todo.id, 'type', "Problem");    
      }
      else if (e.target.value === "Recipe") {
        setTaskTypeColor("todoRecipeBackground");
        updateFirestoreData('todos', props.todo.id, 'type', "Recipe");   
      }
      else if (e.target.value === "Schedule") {
        setTaskTypeColor("todoScheduleBackground");
        updateFirestoreData('todos', props.todo.id, 'type', "Schedule");
      }
    },[props]);

    const handleSetDeadline = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDeadline(e.target.value);
    },[]);

    const handleDeadline = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      updateFirestoreData('todos', props.todo.id, 'deadline', deadline);  
      handleButtonAnimation(setAnimBtn3, clickedBtnAnimShrink, 1000);    
    },[deadline, props.todo.id]);

        
    return (<>  
      <PropsyFlexBox 
        opacity={opacity1}
        width={'80vw'}
        transition={'1s'}
        marginBottom={"100px"}
        backgroundColor={taskTypeColor}
        content={<>    
  <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} sx={userImg} />
  <Paragraph sx={userNameInTask}>{props.todo.userName}</Paragraph>
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
              <Flex sx={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Select data-tip data-for="task-type" sx={optionBox} defaultValue={props.todo.type}
                                      onChange={handleTaskTypeChange} >
                  <option value="Task" >Task</option>
                  <option value="Idea" >Idea</option>
                  <option value="Problem" >Problem</option> 
                  <option value="Schedule" >Schedule</option> 
                  <option value="Recipe" >Recipe</option>           
                </Select>  
                <ReactTooltip id="task-type" place="bottom" effect="solid">
                  change type of task
                </ReactTooltip> 
                <ReactTooltip id="deadline" place="bottom" effect="solid">
                  set date marker/date due
                </ReactTooltip> 
                <Flex sx={editItemDateAndTaskTypeWrapper}>
                      <PropsyInput inputType={'date'}
                                   width={'130px'} 
                                   onChange={handleSetDeadline}
                                   value={deadline}
                                   fontFamily={'body'}
                                            />                             
                      <PropsyBtn onClick={handleDeadline}
                                 tooltipId={'set-date'}
                                 tooltipTxt={'confirm date marker/due date setting'}
                                 background={btnGradient}
                                 animation={animBtn3}
                                 animTime={'2s'}
                                 content={iconDateBtn}
                                 size={0.8}
                                 margin={0}                                
                                          />                
                </Flex>            
              </Flex>              
          </Flex>  
        </>}
      />   
    </>)
  }

  export default React.memo(TodoItem);