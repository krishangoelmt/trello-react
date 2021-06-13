import { withRouter } from "react-router";

import {useContext} from "react"
import {Context} from '../../store'

const BoardName = (props) => {
const [ state] = useContext(Context)
const { board: { trelloBoard }} = state;
const { location : { pathname } = {}} = props
const boardId =  parseInt(pathname.split('/').slice(-1).pop())
const boardData = trelloBoard.filter((item)=> item.id === boardId ) 
    return ( 
        <div className="display-board-name">{boardData[0]?.name} Board</div>
     );
}
 
export default withRouter(BoardName);