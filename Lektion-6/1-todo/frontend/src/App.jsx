import { useEffect } from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

function App() {
  
  return (
    <div className="bg-slate-400 h-screen p-9">
      <div className="bg-white h-full flex flex-col">
        <TodoList />
        <TodoForm />
      </div>
    </div>
  )
}
export default App
