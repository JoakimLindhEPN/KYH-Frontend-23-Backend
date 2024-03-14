import express from 'express'
const router = express.Router()
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todosController.js'

// CRUD - Create - Read - Update - Delete
// router.route('/').get(getTodos).post(createTodo)

// Create
router.post('/', createTodo)

// Read
router.get('/', getTodos)

// Update
router.put('/:id', updateTodo)
// router.patch()

// Delete
router.delete('/:id', deleteTodo)

export default router