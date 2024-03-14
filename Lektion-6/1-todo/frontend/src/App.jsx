import { useEffect, useState } from "react"

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('/api/todos')
      const data = await res.json()
      setTodos(data)
    }
    getTodos()
  }, [])

  const removeTodo = async (id) => {
    try {
      const res = await fetch('/api/todos/' + id, { method: 'DELETE' })
      const data = await res.json()

    setTodos(todos => todos.filter(todo => todo._id !== data))
    } catch (err) {
      console.log(err.message)
    }
  } 

  const updateCompleted = async (todo) => {
    try {
      const res = await fetch('/api/todos/' + todo._id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ completed: !todo.completed })
      })

      const data = await res.json()

      const _todos = todos.map(todo => {
        if(todo._id === data._id) {
          todo.completed = data.completed
        }
        return todo
      })
      setTodos(_todos)

    } catch (err) {
      console.log(err.message)      
    }
  }

  const addTodo = async (title) => {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ title })
      })

      const data = await res.json()
      setTodos(todos => [...todos, data])
    } catch (err) {
      console.log(err.message)
    }
  }
  
  return (
    <div className="bg-slate-400 h-screen p-9">
      <div className="bg-white h-full flex flex-col">
        <TodoList todos={todos} removeTodo={removeTodo} updateCompleted={updateCompleted} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}
export default App
