import { ACTION_TYPES } from "../actionTypes";
import {
  addBoardState,
  getBoardState,
  updateBoardQuery,
} from "../components/AddBoard";
import { deleteBoardState } from "../components/RenderBoard";

function BoardReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TRELLO_BOARD:
      return {
        ...state,
        trelloBoard: addBoardState(state, action),
      };
    case ACTION_TYPES.DELETE_TRELLO_BOARD:
      return {
        ...state,
        trelloBoard: deleteBoardState(state, action),
      };
    case ACTION_TYPES.EDIT_TRELLO_BOARD:
      return {
        ...state,
        editBoarddetails: getBoardState(state, action),
      };
    case ACTION_TYPES.CLEAR_EDIT_BOARD_DETAILS:
      return {
        ...state,
        editBoarddetails: {},
      };
    case ACTION_TYPES.UPDATE_TRELLO_BOARD:
      return {
        ...state,
        trelloBoard: updateBoardQuery(state, action),
        editBoarddetails: {},
      };
    default:
      return state;
  }
}

export default BoardReducer;
