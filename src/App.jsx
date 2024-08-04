// src/App.jsx
import { useState } from 'react';
import './App.css';
import TodoForm from './Redux/TodoForm';
import TodoList from './Redux/Todolist';

function App() {
  

  return (
    <>
     <TodoForm />
     <TodoList />
    </>
  );
}

export default App;
