import express from 'express'
import cors from 'cors'
// import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// app.use(notFound)
// app.use(errorHandler)

export default app