const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('server: http://localhost:' + PORT))


mongoose.connect(mongoURI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err.message))