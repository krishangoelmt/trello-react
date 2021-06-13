import { Input , Button}  from "antd"
import StyledAddList from "./style"
import React , { useState, useContext} from "react";
import {Context} from '../../store'
import {ACTION_TYPES} from "../../actionTypes"


export function newList(name, boardId) {
    return { id: Date.now(), name: name, boardId: boardId  };
  }
  
  export function addListState(state, action) {
    const { trelloList } = state;
    let newAddedList = [];
    newAddedList.push(newList(action.payload.name, action.payload.boardId));
    return [...trelloList, ...newAddedList];
  }


const AddList = (props) => {
    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState("");
    const { boardId } =  props;
    const [disabledSubmit, setDisabled] = useState(true);

  const onSubmit = () =>{
    dispatch({
        type: ACTION_TYPES.ADD_TRELLO_LIST, 
        payload: {name:name, boardId:boardId }
        })  
     setName("")
     setDisabled(true);
  }
  const onHandle = (value) =>{
        setName(value) 
        setDisabled(false);
  }
    return ( 
     <StyledAddList>
      <Input className="dl-add-list" value={name} onChange={(e)=>onHandle(e.target.value)} placeholder="Enter List Name"/>
      <Button type="primary" disabled={disabledSubmit} onClick={onSubmit} className="add-list-btn">Add List</Button>
     </StyledAddList>
    );
}
 
export default AddList;