import Todo from '../schemas/todosSchema.js'
import asyncHandler from 'express-async-handler'

const createTodo = asyncHandler(async (req, res) => {
  
  const todo = await Todo.create({ title: req.body.title })
  res.status(201).json(todo)

}) 


const getAll = asyncHandler(async (req, res) => {
  const todos = await Todo.find()
  res.status(200).json(todos)
})


const getById = asyncHandler(async (req, res) => {

  const id = req.params.id

  const todo = await Todo.findById(id)

  if(!todo) {
    res.status(404)
    throw new Error('Todo doesn\'t exist')
  }

  res.status(200).json(todo)
})



export {
  createTodo,
  getAll,
  getById
}