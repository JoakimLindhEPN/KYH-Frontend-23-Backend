import express from 'express'
import dbConnect from './server.js'
import todoRoutes from './routes/todoRoutes.js'
import path from 'node:path'
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




if(process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, 'frontend/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
} else {
  app.get('/', (req, res) => res.send('please change NODE_ENV to production to show the page'))
}



export default app