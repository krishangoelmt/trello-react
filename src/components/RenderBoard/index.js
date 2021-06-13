import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store";

import { ACTION_TYPES } from "../../actionTypes";

import { Card, Button } from "antd";

import StyledRenderBoardList from "./style";

export function deleteBoardState(state, action) {
  const { trelloBoard } = state;
  let filteredBoardArray = trelloBoard.filter(
    (board) => board.id !== action.payload.id
  );
  return [...filteredBoardArray];
}

const RenderBoardList = () => {
  const [state, dispatch] = useContext(Context);
  const {
    board: { trelloBoard },
  } = state;

  const onEdit = (e, id) => {
    e.stopPropagation();
    dispatch({ type: ACTION_TYPES.EDIT_TRELLO_BOARD, payload: { id: id } });
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    dispatch({ type: ACTION_TYPES.DELETE_TRELLO_BOARD, payload: { id: id } });
  };

  return (
    <StyledRenderBoardList>
      {trelloBoard.map((board) => {
        return (
          <Card key={board.id} className="dl-card">
            <Link to={`/trello/task/${board.id}`}>
              <div title={board.name} className="board-name">
                <b className="heading">Board Name:</b>
                {board.name}
              </div>
              <div title={board.description} className="des-name">
                <b className="heading">About Board:</b>
                {board.description}
              </div>
            </Link>
            <div className="footer">
              <Button type="text" onClick={(e) => onEdit(e, board.id)}>
                Edit
              </Button>
              <Button type="danger" onClick={(e) => onDelete(e, board.id)}>
                Delete
              </Button>
            </div>
          </Card>
        );
      })}
    </StyledRenderBoardList>
  );
};

export default RenderBoardList;
