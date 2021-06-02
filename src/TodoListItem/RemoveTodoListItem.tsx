import React from 'react';
import './TodoListItem.css';

type RemoveTodoListItemProps = {
  removeItem: () => void;
}

const RemoveTodoListItem: React.FC<RemoveTodoListItemProps> = ({ removeItem }) => {
  return <button onClick={() => removeItem()} className="remove-button p-2">
    Remove Task
  </button>
}

export default RemoveTodoListItem;