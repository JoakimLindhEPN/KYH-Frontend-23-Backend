import { Schema, model } from 'mongoose'

const todosSchema = new Schema({
  title: {
    type: String,
    required: [true, 'you need to enter a title']
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Todo = model('Todo', todosSchema)
export default Todo