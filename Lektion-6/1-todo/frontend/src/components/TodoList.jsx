import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, removeTodo, updateCompleted }) => {
  

  return (
    <div className="flex-1 overflow-y-auto">
      {
        todos.map(todo => (
          <TodoListItem key={todo._id} todo={todo} removeTodo={removeTodo} updateCompleted={updateCompleted} />
        ))
      }
    </div>
  )
}
export default TodoList