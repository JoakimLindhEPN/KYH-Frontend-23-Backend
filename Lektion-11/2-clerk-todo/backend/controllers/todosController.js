import Todo from '../Schemas/todoSchema'
import asyncHandler from 'express-async-handler'

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find()
  res.status(200).json(todos)
})

const createNewTodo = asyncHandler(async (req, res) => {
  const { title } = req.body
  if(!title) {
    res.status(400)
    throw new Error('You need to enter something todo!')
  }

  const todo = await Todo.create({
    title
  })

  res.status(201).json(todo)
})

export {
  getTodos,
  createNewTodo
}