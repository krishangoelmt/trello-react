import React, { useContext } from "react";

import { Context } from "../../store";

import { Card } from "antd";


import AddTask from "../AddTask"

import StyledRenderList from "./style";

import RenderTasks from "../RenderTasks"


const RenderList = (props) => {
    const { boardId } = props
  const [state, dispatch] = useContext(Context);
  const {
    list: { trelloList },
  } = state;

  const filteredBoard = trelloList.filter((list)=> list.boardId === boardId)

  return (
    <StyledRenderList>
      {filteredBoard.map((list) => {
        return (
          <Card  key={list.id} className="dl-card-list" title={list.name}>
           <AddTask boardId={boardId} listId={list.id}/>
            <RenderTasks boardId={boardId} listId={list.id}/>
          </Card>
        );
      })}
    </StyledRenderList>
  );
};

export default RenderList;
