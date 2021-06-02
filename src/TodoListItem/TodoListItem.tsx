import React, { useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TodoListItemData } from '../api/data';
import EditableTextArea from '../EditableInputs/EditableTextArea';
import EditableTextInput from '../EditableInputs/EditableTextInput';
import RemoveTodoListItem from './RemoveTodoListItem';

type TodoListItemProps = {
  item: TodoListItemData;
  index: number;
  updateItem: (field: string, value: string) => void;
  removeItem: () => void;
}

const statusColorMap = (status: string) => {
  const lower = status.toLocaleLowerCase();
  switch (lower) {
    case "":
      return "bg-white";
    case "to-do":
      return "bg-red-500";
    case "in progress":
      return "bg-yellow-500";
    case "done":
    case "completed":
      return "bg-green-500"
    default:
      return "bg-blue-500";
  }
}

const TodoListItem: React.FC<TodoListItemProps> = ({ item, index, updateItem, removeItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return <Draggable draggableId={item.id} index={index}>
    {provided => <div
      className="p-2.5 rounded bg-white shadow-sm"
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <label htmlFor="title" {...provided.dragHandleProps}>Task Title:</label>
      <EditableTextInput
        value={item.title}
        placeholder="Enter a task name"
        inputRef={inputRef}
        name="title"
        onChange={(value) => updateItem('title', value)}
      />
      <label htmlFor="status">Task Status:</label>
      <EditableTextInput
        value={item.status}
        placeholder="Enter a task status"
        inputRef={statusRef}
        name="status"
        onChange={(value) => updateItem('status', value)}
        additionalClasses={[statusColorMap(item.status)]}
        textColor='white'
      />
      <label htmlFor="notes">Task Notes:</label>
      <EditableTextArea
        placeholder="Enter task notes"
        onChange={(value) => updateItem('notes', value)}
        name="notes"
        value={item.notes}
        textAreaRef={textAreaRef}
      />
      <RemoveTodoListItem removeItem={removeItem} />
    </div>
    }
  </Draggable>
}

export default TodoListItem;