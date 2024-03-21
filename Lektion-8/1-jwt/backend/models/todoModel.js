import Todo from'../schemas/todoSchema.js'
import asyncHandler from 'express-async-handler'

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.userId })
  res.status(200).json(todos)
})

const createNewTodo = asyncHandler(async (req, res) => {
  const { title } = req.body
  if(!title) {
    res.status(400)
    throw new Error('You need to enter something todo!')
  }

  const todo = await Todo.create({
    title,
    user: req.userId
  })

  res.status(201).json(todo)

})

export {
  getTodos,
  createNewTodo
}