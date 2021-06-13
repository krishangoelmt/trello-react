import React , { useEffect , useContext} from "react";
import {Context} from '../../store'
import RenderList from "../RenderList";
import AddList from "../AddList"
import StyledRenderTaskList from "./style"


const RenderTaskList = (props) => {
const { match : { params :{boardId} } = {}} = props
 const [state, dispatch] = useContext(Context);
    return ( 
        <StyledRenderTaskList>
        <RenderList boardId={boardId}/>
        <AddList boardId={boardId}/>
        </StyledRenderTaskList>
    );
}
 
export default RenderTaskList;