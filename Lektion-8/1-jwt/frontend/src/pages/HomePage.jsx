import { useEffect, useState } from "react"
import { useAuth } from '../contexts/authContext'
function HomePage() {

  const { token, user } = useAuth()
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    if(!token) return
    const getTodos = async () => {
      const res = await fetch('http://localhost:8000/api/todos', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      const data = await res.json()

      console.log({res, data})
      setTodos(data)
    }
    getTodos()
  }, [])

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if(!token) return

    const addTodo = async () => {
      const res = await fetch('http://localhost:8000/api/todos', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ title })
      })
      const data = await res.json()

      console.log({res, data})
      if(res.status === 201) {
        setTodos(todos => [...todos, data])
      }
    }
    addTodo()
  }

  return (
    <div className="min-h-96 flex flex-col">
      <div className="flex-1">
        { todos.map(todo => (
          <div key={todo._id}>{todo.title}</div>
        ))}
      </div>


      <div className="">
        <form onSubmit={handleAddTodo} className="flex flex-col gap-4 px-8">
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="border rounded border-neutral-600" />
          <button className="bg-green-700 text-white py-1 rounded">Add todo</button>
        </form>
      </div>
    </div>
  )
}
export default HomePage