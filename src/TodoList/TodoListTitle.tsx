import React, { useRef } from 'react';
import Editable from '../EditableInputs/EditableInput';
import './TodoList.css';

type TodoListTitleProps = {
  title: string;
  updateListTitle: (title: string) => void;
}

const TodoListTitle: React.FC<TodoListTitleProps> = ({ title, updateListTitle }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <div className="list-title">
    <Editable
      text={title}
      placeholder="Write a task name"
      childRef={inputRef}
      type="input"
    >
      <input
        ref={inputRef}
        type="text"
        name="list-title"
        placeholder="List title"
        value={title}
        onChange={e => updateListTitle(e.target.value)}
      />
    </Editable>
  </div>
}

export default TodoListTitle;