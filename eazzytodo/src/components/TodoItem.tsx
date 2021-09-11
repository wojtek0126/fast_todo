/** @jsxImportSource theme-ui */
import { Image, Button, Paragraph, Flex } from 'theme-ui';   

import 'firebase/firestore';
import 'firebase/auth';
import { btnPrimary, itemsBtnsContainer, todoItemContainer, userImg } from '../styles/elements';
import { txtCompleteTaskBtnEng, txtDeleteTaskBtnEng, txtEditTaskBtnEng } from '../content/content';
import { firestore } from '../firebase/firebase';
require('firebase/auth');  

type AppProps = {
  todo: any;     
}; 


function TodoItem(props: AppProps) {  
    const { text, photoURL }: any = props.todo;

    const onDelete = () => {
      firestore.collection('todos').doc(props.todo.id).delete()
    }

  
    return (<>  
      <Flex sx={todoItemContainer}>
        <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} sx={userImg} />
        <Paragraph>{text}</Paragraph>
          <div sx={itemsBtnsContainer}>
          <Button 
              sx={btnPrimary}
              >{txtCompleteTaskBtnEng}</Button>
               <Button 
              sx={btnPrimary}
              >{txtEditTaskBtnEng}</Button>
               <Button onClick={onDelete}
              sx={btnPrimary}
              >{txtDeleteTaskBtnEng}</Button>
          </div>             
      </Flex>
    </>)
  }

  export default TodoItem;