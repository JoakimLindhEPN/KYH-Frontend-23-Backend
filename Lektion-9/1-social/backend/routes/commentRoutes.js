import express from 'express'
import verifyToken from '../middleware/authMiddleware.js'
import {
  addComment,
  removeComment
} from '../controllers/commentsController.js'
const router = express.Router()

router.post('/:postId', verifyToken, addComment)

router.delete('/:postId', verifyToken, removeComment)

export default router
