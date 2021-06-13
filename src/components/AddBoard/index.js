import React, { useState, useContext, useEffect, useRef } from "react";
import { Context } from "../../store";
import { ACTION_TYPES } from "../../actionTypes";
import { updatedArrayValues } from "../../util";
import StyledAddBoard, {StyledModal} from "./style";
import { Button, Input } from "antd";

const { TextArea } = Input;

export function newBoard(name, description) {
  return { id: Date.now(), name: name, description: description };
}

export function addBoardState(state, action) {
  const { trelloBoard } = state;
  let newAddedBoard = [];
  newAddedBoard.push(newBoard(action.payload.name, action.payload.description));
  return [...trelloBoard, ...newAddedBoard];
}

export function getBoardState(state, action) {
  const { trelloBoard } = state;
  let filteredBoardArray = trelloBoard.filter(
    (board) => board.id === action.payload.id
  );
  return Object.assign({}, ...filteredBoardArray);
}

export function updateBoardQuery(state, action) {
  const { trelloBoard } = state;
  return updatedArrayValues(trelloBoard, action.payload);
}

const AddBoard = (props) => {
  const [name, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [disabledSubmit, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [state, dispatch] = useContext(Context);
  const {
    board: { editBoarddetails = {} },
  } = state;
  let isEditMode = useRef();
  isEditMode.current = Object.keys(editBoarddetails).length;

  useEffect(() => {
    if (isEditMode.current) {
      setDescription(editBoarddetails.description);
      setValue(editBoarddetails.name);
      setVisible(true)
    }
  }, [editBoarddetails]);

  const addBoard = () => {
    dispatch({
      type: ACTION_TYPES.ADD_TRELLO_BOARD,
      payload: { name: name, description: description },
    });
    setValue("");
    setDescription("");
    setDisabled(true);
    setVisible(false)
  };

  const updateBoard = () => {
    dispatch({
      type: ACTION_TYPES.UPDATE_TRELLO_BOARD,
      payload: {
        id: editBoarddetails.id,
        name: name,
        description: description,
      },
    });
    setValue("");
    setDescription("");
    setDisabled(true);
    setVisible(false)
  };

  const setName = (e) => {
    setValue(e.target.value);
    setDisabled(false);
  };

  const handleCancel = () => {
    dispatch({ type: ACTION_TYPES.UPDATE_TRELLO_BOARD,payload:{}});
    setValue("");
    setDescription("");
    setVisible(false);
  };
  const openModal = () => {
    setVisible(true);
  };
  return (
    <StyledAddBoard>
      <Button type="primary" onClick={openModal}>
        Add Board
      </Button>
      <StyledModal
        title="Create Board"
        visible={visible}
        onCancel={handleCancel}
        onOk={isEditMode.current ? updateBoard : addBoard}
        okText={isEditMode.current ? "Update Board" : "Create Board"}
        okButtonProps={{ disabled: disabledSubmit }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e)}
          placeholder="Enter Board Name"
        />
        <TextArea
          className="dl-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </StyledModal>
    </StyledAddBoard>
  );
};

export default AddBoard;
