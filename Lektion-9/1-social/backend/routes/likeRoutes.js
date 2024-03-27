import express from 'express'
import verifyToken from '../middleware/authMiddleware.js'
import {
  likePost
} from '../controllers/likesController.js'

const router = express.Router()

router.post('/:postId', verifyToken, likePost)

export default router
