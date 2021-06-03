import React from 'react';

type TodoListHeaderProps = {
  addTodoList: () => void;
  flipLists: () => void;
  isHorizontal: boolean;
}

const TodoListsHeader: React.FC<TodoListHeaderProps> = ({ addTodoList, flipLists, isHorizontal }) => {
  return <div className="left">
    <button className="button" onClick={addTodoList}>Create New List</button>
    <button className="button" onClick={flipLists}>Make {isHorizontal ? "Vertical" : "Horizontal"}</button>
  </div>
}


export default TodoListsHeader;