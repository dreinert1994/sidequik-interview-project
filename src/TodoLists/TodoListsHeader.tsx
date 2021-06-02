import React from 'react';

type TodoListHeaderProps = {
  addTodoList: () => void;
}

const TodoListsHeader: React.FC<TodoListHeaderProps> = ({ addTodoList }) => {
  return <div className="left">
    <button className="button" onClick={addTodoList}>Create New List</button>
  </div>
}


export default TodoListsHeader;