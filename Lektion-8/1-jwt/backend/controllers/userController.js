import express from 'express'
const router = express.Router()

import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile
} from '../models/userModel.js'
import { verifyToken } from '../middleware/authMiddleware.js'

// Routes
router.post('/register', registerUser)
router.post('/login', loginUser)

// TODO: protect
router.get('/profile', verifyToken, getUserProfile)
router.put('/profile', verifyToken, updateUserProfile)


export default router;