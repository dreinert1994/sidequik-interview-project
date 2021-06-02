import React, { useRef } from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import Editable from '../EditableInputs/EditableInput';
import EditableTextInput from '../EditableInputs/EditableTextInput';
import './TodoList.css';

type TodoListTitleProps = {
  title: string;
  dragHandleProps?: DraggableProvidedDragHandleProps
  updateListTitle: (title: string) => void;
  deleteTodoList: () => void;
}

const TodoListTitle: React.FC<TodoListTitleProps> = ({ title, dragHandleProps, updateListTitle, deleteTodoList }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <div className="font-bold" {...dragHandleProps}>
    <button onClick={deleteTodoList} className="delete-button">Delete List</button>
    <EditableTextInput
      value={title}
      inputRef={inputRef}
      placeholder="List Title"
      name="list-title"
      onChange={updateListTitle}
    />
  </div>
}

export default TodoListTitle;