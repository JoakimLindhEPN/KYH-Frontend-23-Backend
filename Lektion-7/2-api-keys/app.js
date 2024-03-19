const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// Controllers / Routes
app.use('/api/dishes', require('./controllers/dishController'))

module.exports = app