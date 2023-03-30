import React from 'react';
import ReactDOM from 'react-dom/client';
import './variables.css';
import './index.css';
import Todolist from './todolist/todolist';

const root = ReactDOM.createRoot(
  document.getElementById('todo-app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>
);