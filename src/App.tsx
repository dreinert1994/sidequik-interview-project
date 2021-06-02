import React from 'react';
import './App.css'
import TodoLists from './TodoLists/TodoLists';

const App: React.FC = () => <div className="grid gap-2.5 h-full text-sm p-1.5 app">
  <div className="grid gap-2.5 todo-lists-container">
      <TodoLists />
  </div>
</div>

export default App;