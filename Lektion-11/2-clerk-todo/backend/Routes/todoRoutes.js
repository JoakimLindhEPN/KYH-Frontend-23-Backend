import express from 'express'
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
const router = express.Router()

import {
  createNewTodo,
  getTodos
} from '../controllers/todosController.js'

// Routes
router.get('/', ClerkExpressRequireAuth(), getTodos)
router.post('/', ClerkExpressRequireAuth(), createNewTodo)


export default router;