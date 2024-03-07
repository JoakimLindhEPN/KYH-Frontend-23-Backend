const express = require('express')
const app = express()
const cors = require('cors')

const contactsController = require('./controllers/contactController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/contacts', contactsController)
// app.use('/api/products', productsController)
// app.use('/api/orders', ordersController)

module.exports = app



// http://localhost:9999/api/contacts