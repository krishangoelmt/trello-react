import {ACTION_TYPES} from "../actionTypes"
import { addTaskState } from "../components/AddTask"

function ListReducer(state,action){
    switch (action.type) {
        case ACTION_TYPES.ADD_TRELLO_TASK:
            return{
                ...state,
                trelloTask: addTaskState(state, action)
            }
            default:
            return state;
    }
}

export default ListReducer