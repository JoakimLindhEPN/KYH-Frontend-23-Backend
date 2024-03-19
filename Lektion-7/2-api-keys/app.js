const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// Controllers / Routes
app.use('/api/dishes', require('./controllers/dishController'))
app.use('/api/register', require('./controllers/applicationsController'))

module.exports = app