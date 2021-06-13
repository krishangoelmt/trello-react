import combineReducers from 'react-combine-reducers';
import boardReducer from "./board.reducer"
import listReducer from "./list.reducer";
import taskReducer from "./task.reducer";
import { MockData } from "../Mock/data"

const initialBoard = {
    trelloBoard:[...MockData.board.trelloBoard],
    editBoarddetails:{},
  }

  const initialList = {
    trelloList:[...MockData.list.trelloList]
  }


  const initialTask = {
    trelloTask:[...MockData.task.trelloTask]
  }


  const [trelloReducer, initialTrelloState] = combineReducers({
    board: [boardReducer, initialBoard],
    list: [listReducer, initialList],
    task:[taskReducer,initialTask]
  });


  export { trelloReducer, initialTrelloState}