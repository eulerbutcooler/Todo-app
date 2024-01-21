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

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer-text' >Made by Amaan</p>
      <p>
        <a className='footer-link' href="https://twitter.com/eulerbutcooler" target="_blank" rel="noopener noreferrer">
          @eulerbutcooler
        </a>
      </p>
    </footer>
  );
}


  return (
    <div>
     <CreateTodo setTodos={setTodos}></CreateTodo>
     <Todos todos={todos} fetchTodos={fetchTodos}></Todos>
     <Footer/>
    </div>
  )
}

export default App
