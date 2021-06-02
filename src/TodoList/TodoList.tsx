import React, { useCallback } from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoListTitle from './TodoListTitle';
import AddTodoListItem from '../TodoListItem/AddTodoListItem';
import { TodoListData, TodoListItemData } from '../api/data';
import { DraggableProvidedDragHandleProps, Droppable } from 'react-beautiful-dnd';

type TodoListProps = {
  list: TodoListData;
  dragHandleProps?: DraggableProvidedDragHandleProps
  updateTodoListItem: (listId: string, updatedItem: TodoListItemData) => void;
  deleteTodoListItem: (listId: string, listItemId: string) => void;
  addTodoListItem: (listId: string) => void;
  deleteTodoList: (listId: string) => void;
  addTodoList: () => void;
  updateTodoListName: (listId: string, name: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ list, dragHandleProps, addTodoListItem, updateTodoListItem, updateTodoListName }) => {

  const addItem = useCallback(() => addTodoListItem(list.id), [list, addTodoListItem]);

  const updateListItem = (id: string, listItem: TodoListItemData) => {
    return (field: string, value: string) => updateTodoListItem(id, {
      ...listItem,
      [field]: value
    });
  };

  const updateListTitle = useCallback((name: string) => updateTodoListName(list.id, name), [list, updateTodoListName]);

  return <Droppable droppableId={list.id} type="item">
    {provided => <div
      className="todo-list"
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      <TodoListTitle
        title={list.name}
        updateListTitle={updateListTitle}
        {...dragHandleProps}
      />
      {list.items.map((item, index) => <TodoListItem
        key={item.id}
        index={index}
        item={item}
        updateItem={updateListItem(list.id, item)}
      />)}
      {provided.placeholder}
      <AddTodoListItem addItem={addItem}/>
    </div>}
  </Droppable>
}
export default TodoList;