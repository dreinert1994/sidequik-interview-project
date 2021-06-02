import React from 'react';
import './TodoListItem.css';

type AddTodoListItemProps = {
  addItem: () => void;
}

const AddTodoListItem: React.FC<AddTodoListItemProps> = ({ addItem }) => {
  return <div onClick={() => addItem()} className="add-todo-list-item">
    + Add
  </div>
}

export default AddTodoListItem;