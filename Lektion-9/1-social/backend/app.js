import express from 'express'
import cors from 'cors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'

import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', userRoutes)
app.use('/api/posts', postRoutes)

app.use(notFound)
app.use(errorHandler)

export default app