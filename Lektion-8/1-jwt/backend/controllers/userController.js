import express from 'express'
const router = express.Router()

import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile
} from '../models/userModel.js'

// Routes
router.post('/register', registerUser)
router.post('/login', loginUser)

// TODO: protect
router.get('/profile', getUserProfile)
router.put('/profile', updateUserProfile)


export default router;