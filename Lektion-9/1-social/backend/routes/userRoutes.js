import express from 'express'
import {
  register,
  login,
  logout
} from '../controllers/userController.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/logout', logout)

export default router