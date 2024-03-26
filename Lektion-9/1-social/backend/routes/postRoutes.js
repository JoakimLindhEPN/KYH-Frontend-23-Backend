import express from 'express'
import {
  createPost,
  getAll,
  getUserOwnPosts,
  editPost
} from '../controllers/postsController.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', verifyToken, getAll)
router.get('/my-posts', verifyToken, getUserOwnPosts)

router.post('/', verifyToken, createPost)

router.put('/:id', verifyToken, editPost)

export default router