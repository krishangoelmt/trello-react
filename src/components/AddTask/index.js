import { Input , Button}  from "antd"
import StyledTaskList from "./style"
import React , { useState, useContext} from "react";
import {Context} from '../../store'
import {ACTION_TYPES} from "../../actionTypes"
import { getRandomUserImage } from "../../util"


export function newTask(payload) {
  const{ name, boardId, listId,userPic} = payload
    return { id: Date.now(), name: name, boardId: boardId, listId:listId, userPic:userPic  };
  }
  
  export function addTaskState(state, action) {
    const { trelloTask } = state;
    let newAddedTasks = [];
    newAddedTasks.push(newTask(action.payload));
    return [...trelloTask, ...newAddedTasks];
  }

const AddTask = (props) => {
    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState("");
    const { boardId, listId } =  props;
    const [disabledSubmit, setDisabled] = useState(true);


  const onSubmit = () =>{
    dispatch({
        type: ACTION_TYPES.ADD_TRELLO_TASK, 
        payload: {name:name, boardId:boardId, listId:listId , userPic:getRandomUserImage()}
       })  
     setName("")
     setDisabled(true);
  }
  const onHandle = (value) =>{
    setName(value) 
    setDisabled(false);
}
    return ( 
     <StyledTaskList>
      <Input value={name} onChange={(e)=>onHandle(e.target.value)} placeholder="Enter Task Name"/>
      <Button type="primary" disabled={disabledSubmit} onClick={onSubmit} className="add-list-btn">Add Task</Button>
     </StyledTaskList>
     );
}
 
export default AddTask;