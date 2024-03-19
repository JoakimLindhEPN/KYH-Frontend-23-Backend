const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// Controllers / Routes
app.use('/api/authors', require('./controllers/authorsController'))
app.use('/api/books', require('./controllers/booksController'))

module.exports = app;