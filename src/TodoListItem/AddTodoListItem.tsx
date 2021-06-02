import React from 'react';
import './TodoListItem.css';

type AddTodoListItemProps = {
  addItem: () => void;
}

const AddTodoListItem: React.FC<AddTodoListItemProps> = ({ addItem }) => {
  return <button onClick={() => addItem()} className="add-button pt-4 pb-2">
    Add Task
  </button>
}

export default AddTodoListItem;