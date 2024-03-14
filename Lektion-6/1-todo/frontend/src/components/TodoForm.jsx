import { useState } from "react";
import { FaPlus } from "react-icons/fa";
const TodoForm = ({ addTodo }) => {

  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(title.trim() === '') return

    addTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3">
      <input type="text" className="border border-gray-400 p-1 rounded flex-1" value={title} onChange={e => setTitle(e.target.value)} />
      <button className="bg-emerald-700 p-2 rounded text-white"><FaPlus /></button>
    </form>
  )
}
export default TodoForm