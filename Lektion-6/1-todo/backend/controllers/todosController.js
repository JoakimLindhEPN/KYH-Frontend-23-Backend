import mongoose from 'mongoose'
import Todo from '../models/todoModel.js'


/**
 * Creates a new todo and saves it to the database
 */
export const createTodo = async (req, res) => {
  try {
    
    const { title } = req.body

    if(!title) {
      res.status(400)
      throw new Error('You need to enter what todo')
    }

    const todo = await Todo.create({ title })

    if(!todo) {
      res.status(500)
      throw new Error('Something went wrong when creating the todo')
    }

    res.status(201).json(todo)

  } catch (err) {
    res.json({ 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
  }
}

/** 
 * Get all todos from the database
 */
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(201).json(todos)

  } catch (err) {
    res.json({ 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
  }
}

/** 
 * Takes an id and updates a todo on the databsae
 */
export const updateTodo = async (req, res) => {
  try {
    
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)) {
      res.status(400)
      throw new Error('You need to provide a valid ObjectId')
    }

    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true })

    if(!todo) {
      res.status(404)
      throw new Error('Resource not found')
    }
    
    res.status(200).json(todo)


  } catch (err) {
    res.json({ 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
  }

}

/** 
 * Takes an id and deletes a todo on the databsae
 */
export const deleteTodo = async (req, res) => {
  try {

    const id = req.params.id
    if(!mongoose.isValidObjectId(id)) {
      res.status(400)
      throw new Error('You need to provide a valid ObjectId')
    }

    const todo = await Todo.findByIdAndDelete(id)

    if(!todo) {
      res.status(404)
      throw new Error('Resource not found')
    }

    res.status(200).json( todo._id )

  } catch (err) {
    res.json({ 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
  }
}
