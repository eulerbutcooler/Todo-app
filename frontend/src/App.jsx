import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`);
    const todos = await response.json();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div>
     <CreateTodo setTodos={setTodos}></CreateTodo>
     <Todos todos={todos} fetchTodos={fetchTodos}></Todos>
    </div>
  )
}

export default App
