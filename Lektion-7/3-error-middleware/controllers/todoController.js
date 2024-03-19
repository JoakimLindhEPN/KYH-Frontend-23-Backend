import { Router } from 'express'
import { createTodo, getAll, getById } from '../models/todoModel.js'
const router = Router()

router.post('/', createTodo)
router.get('/', getAll)
router.get('/:id', getById)

export default router