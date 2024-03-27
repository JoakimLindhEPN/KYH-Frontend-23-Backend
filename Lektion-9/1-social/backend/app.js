import express from 'express'
import cors from 'cors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'

import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import likeRoutes from './routes/likeRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/like', likeRoutes)
app.use('/api/comment', commentRoutes)

app.use(notFound)
app.use(errorHandler)

export default app