import { Schema, model, Types } from 'mongoose'

const todoSchema = new Schema({

  title:        { type: String, required: true },
  completed:    { type: Boolean, default: false },
  user:         { type: Types.ObjectId, ref: 'User', required: true }

}, { timestamps: true })

const Todo = model('Todo', todoSchema)
export default Todo