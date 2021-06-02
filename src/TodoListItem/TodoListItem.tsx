import React, { useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TodoListItemData } from '../api/data';
import EditableInput from '../EditableInputs/EditableInput';
import './TodoListItem.css';

type TodoListItemProps = {
  item: TodoListItemData;
  index: number;
  updateItem: (field: string, value: string) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ item, index, updateItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return <Draggable draggableId={item.id} index={index}>
    {provided => <div
      className="todo-list-item"
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
        <EditableInput
          text={item.title}
          placeholder="Write a task name"
          childRef={inputRef}
          type="input"
        >
          <input
            ref={inputRef}
            type="text"
            name="title"
            placeholder="Thing to do"
            value={item.title}
            onChange={e => updateItem('title', e.target.value)}
          />
        </EditableInput>
        <EditableInput
          text={item.notes}
          placeholder="Notes..."
          childRef={textAreaRef}
          type="textarea"
        >
          <textarea
            ref={textAreaRef}
            name="notes"
            //className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Description for the task"
            rows={5}
            value={item.notes}
            onChange={e => updateItem('notes', e.target.value)}
          />
        </EditableInput>
      </div>
    }
  </Draggable>
}

export default TodoListItem;