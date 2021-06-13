import {ACTION_TYPES} from "../actionTypes"
import { addListState } from "../components/AddList"

function ListReducer(state,action){
    switch (action.type) {
        case ACTION_TYPES.ADD_TRELLO_LIST:
            return{
                ...state,
                trelloList: addListState(state, action)
            }
            default:
            return state;
    }
}

export default ListReducer