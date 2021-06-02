import React from 'react';
import './App.css'
import TodoLists from './TodoLists/TodoLists';

const App: React.FC = () => <div className="app">
  <div className="todo-lists-container">
      <TodoLists />
  </div>
</div>

export default App;