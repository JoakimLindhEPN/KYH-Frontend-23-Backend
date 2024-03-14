import { FaRegTrashAlt } from "react-icons/fa";

const TodoListItem = ({ todo, removeTodo, updateCompleted }) => {

  return (
    <div className="flex justify-between items-center p-1 border-b">
      <p onClick={() => updateCompleted(todo)} className={`flex-1 cursor-pointer ${todo.completed && "line-through text-gray-400"}`}>{todo.title}</p>
      <button onClick={() => removeTodo(todo._id)}><FaRegTrashAlt className="text-red-800" /></button>
    </div>
  )
}
export default TodoListItem