import express from 'express'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import cors from 'cors'
// const cors = require('cors')

import todoRoutes from './Routes/todoRoutes.js'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/todos', todoRoutes)

app.use(notFound)
app.use(errorHandler)

export default app