import React, { useState } from 'react';
import { data, TodoListItemData } from '../api/data';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import TodoList from '../TodoList/TodoList';
import './TodoLists.css';
import TodoListsHeader from './TodoListsHeader';

const TodoLists: React.FC = () => {
  const [todoLists, setTodoLists] = useState(data);
  const [nextListId, setNextListId] = useState(data.length+1);
  const [nextItemId, setNextItemId] = useState(data.map(l => l.items.length).reduce((acc, val) => acc+val)+1);

  const updateTodoListItem = (listId: string, updatedItem: TodoListItemData) => {
    const list = todoLists.find(l => l.id === listId);
    if (!list) { return; }
    const index = list.items.findIndex(i => i.id === updatedItem.id);
    if (index < 0) { return; }
    list.items.splice(index, 1, updatedItem);
    setTodoLists([...todoLists]);
  }

  const deleteTodoListItem = (listId: string, listItemId: string) => {
    const list = todoLists.find(l => l.id === listId);
    if (!list) { return; }
    const index = list.items.findIndex(i => i.id === listItemId);
    if (index < 0) { return; }
    list.items.splice(index, 1);
    setTodoLists([...todoLists]);
  }

  const deleteTodoList = (listId: string) => {
    const index = todoLists.findIndex(l => l.id === listId);
    if (index < 0) { return; }
    todoLists.splice(index, 1);
    setTodoLists([...todoLists]);
  }
  
  const addTodoList = () => {
    todoLists.push({
      name: "",
      id: `list-${nextListId}`,
      items: []
    });
    setNextListId(listId => listId + 1);
    setTodoLists([...todoLists])
  }
  
  const addTodoListItem = (listId: string) => {
    const list = todoLists.find(l => l.id === listId);
    if (!list) {
      return;
    }
    list.items.push({
      id: `item-${nextItemId}`,
      title: "",
      notes: "",
      status: "To-Do"
    });
    setNextItemId(nextItemId => nextItemId+1);
    setTodoLists([...todoLists]);
  }

  const updateTodoListName = (listId: string, name: string) => {
    const list = todoLists.find(l => l.id === listId);
    if (!list) {
      return;
    }
    list.name = name;
    setTodoLists([...todoLists]);
  }

  const onDragEnd = (result: DropResult) => {
    const { draggableId, source, destination, type } = result;

    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)){
      return;
    }

    if (type === "list") {
      const listToMove = todoLists.find(l => l.id === draggableId);
      if (listToMove) {
        todoLists.splice(source.index, 1);
        todoLists.splice(destination.index, 0, listToMove);
      }
    } else {
      const sourceList = todoLists.find(l => l.id === source.droppableId);
      if (!sourceList) { return; }

      const itemToMove = sourceList.items.find(i => i.id === draggableId);
      if (!itemToMove) { return; }

      sourceList.items.splice(source.index, 1);
      if (source.droppableId === destination.droppableId) {
        sourceList.items.splice(destination.index, 0, itemToMove)
      } else {
        const destinationList = todoLists.find(l => l.id === destination.droppableId);
        destinationList?.items.splice(destination.index, 0, itemToMove);
      }
    }
    setTodoLists([...todoLists]);
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    <TodoListsHeader addTodoList={addTodoList}/>
    <Droppable droppableId="lists" direction="horizontal" type="list">
      {provided => <div
        className="grid overflow-auto grid-flow-col gap-2.5 todo-lists"
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        {todoLists.map((list, index) =>
          <Draggable key={list.id} draggableId={list.id} index={index}>
            {provided =>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
              >
                <TodoList
                  list={list}
                  dragHandleProps={provided.dragHandleProps}
                  addTodoListItem={addTodoListItem}
                  updateTodoListItem={updateTodoListItem}
                  deleteTodoListItem={deleteTodoListItem}
                  addTodoList={addTodoList}
                  deleteTodoList={deleteTodoList}
                  updateTodoListName={updateTodoListName}
                />
              </div>
            }
          </Draggable>)
        }
        {provided.placeholder}
      </div>}
    </Droppable>
</DragDropContext>
}

export default TodoLists;
