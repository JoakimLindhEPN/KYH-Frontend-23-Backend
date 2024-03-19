import express from 'express'
const app = express()
import todoController from './controllers/todoController.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/todos', todoController)

app.use(notFound)
app.use(errorHandler)

export default app