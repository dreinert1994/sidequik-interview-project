export interface TodoListItemData {
  id: string;
  status: string;
  title: string;
  notes: string;
}

export interface TodoListData {
  id: string;
  name: string;
  items: TodoListItemData[];
}

export const data: TodoListData[] = [
  {
    id: 'list-1',
    name: "Errands",
    items: [
      {
        id: 'item-1',
        title: "Grocery Shopping",
        notes: "Don't forget to pick up ingredients for the cake",
        status: "In Progress"
      }
    ]
  },
  {
    id: 'list-2',
    name: "Chores",
    items: [
      {
        id: 'item-2',
        title: "Take out the garbage",
        notes: "Garbage goes out friday this week",
        status: "To-Do"
      },
      {
        id: 'item-3',
        title: "Empty the dishwasher",
        notes: "",
        status: "Completed"
      }
    ]
  }
];