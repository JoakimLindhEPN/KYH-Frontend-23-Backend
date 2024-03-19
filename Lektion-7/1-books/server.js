const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server running on http://localhost:' + PORT))

const connectDB = async () => {
  try {
    if(!MONGO_URI) throw new Error('no connection string found in .env')

    await mongoose.connect(MONGO_URI)
    console.log('Connected to DB')

  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

connectDB()