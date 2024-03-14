import { useEffect, useState } from "react"
import TodoListItem from "./TodoListItem"

const TodoList = () => {
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
    const res = await fetch('/api/todos/' + id, { method: 'DELETE' })
    const data = await res.json()

    setTodos(todos => todos.filter(todo => todo._id !== data))
  } 

  return (
    <div className="flex-1">
      {
        todos.map(todo => (
          <TodoListItem key={todo._id} todo={todo} removeTodo={removeTodo} />
        ))
      }
    </div>
  )
}
export default TodoList