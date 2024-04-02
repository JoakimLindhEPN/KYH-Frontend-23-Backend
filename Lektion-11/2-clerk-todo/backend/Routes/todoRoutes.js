import express from 'express'
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
const router = express.Router()

// Routes
// router.get('/', verifyToken, getTodos)
// router.post('/', verifyToken, createNewTodo)

router.get('/unprotected', (req, res) => {
  res.json({message: 'unprotected'})
})

router.get('/protected', ClerkExpressRequireAuth({}), (req, res) => {

  res.json({ message: 'protected', auth: req.auth })
})

export default router;