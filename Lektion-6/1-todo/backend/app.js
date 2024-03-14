import express from 'express'
import dbConnect from './server.js'
import todoRoutes from './routes/todoRoutes.js'
// import dotenv from 'dotenv'
// dotenv.config()

dbConnect()
const app = express()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server running on port: ' + PORT))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/todos', todoRoutes)

export default app