import React, { useContext , useEffect, useState} from "react";
import { Context } from "../../store";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const RenderTasks = (props) => {
  const { boardId, listId } = props;
  const [state, dispatch] = useContext(Context);
  const { task: { trelloTask } = {} } = state;

  const filteredTask = trelloTask.filter(
    (task) => task.boardId === boardId && task.listId === listId
  );
  const [allTask, updateTask] = useState(filteredTask);

  useEffect(()=>{
   updateTask(filteredTask)
  },[state])

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(allTask);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateTask(items);
  }
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul
            className="ul-items"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {allTask.map((task, index) => {
              return (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="list-item"
                      key={task.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="characters-thumb">
                        <img
                          className="user-pic"
                          src={`${task.userPic}`}
                          alt={`${task.userPic}`}
                        />
                      </div>
                      <span>{task.name}</span>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RenderTasks;
