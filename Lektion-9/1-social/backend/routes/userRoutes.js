import express from 'express'
import {
  register,
  login,
  logout,
  getUserData
} from '../controllers/userController.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/logout', logout)

router.get('/me', verifyToken, getUserData)

export default router