import express from 'express'
import userController from './controllers/userController.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/api/users', userController)

app.use(notFound)
app.use(errorHandler)

export default app