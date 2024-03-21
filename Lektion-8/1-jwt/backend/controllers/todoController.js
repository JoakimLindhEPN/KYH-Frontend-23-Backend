import express from 'express'
const router = express.Router()
import { verifyToken } from '../middleware/authMiddleware.js'
import {
  createNewTodo,
  getTodos
} from '../models/todoModel.js'


// Routes
router.get('/', verifyToken, getTodos)
router.post('/', verifyToken, createNewTodo)

export default router;