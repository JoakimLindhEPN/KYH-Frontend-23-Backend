import express from 'express'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

import userController from './controllers/userController.js'
import todoController from './controllers/todoController.js'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/api/users', userController)
app.use('/api/todos', todoController)

app.use(notFound)
app.use(errorHandler)

export default app