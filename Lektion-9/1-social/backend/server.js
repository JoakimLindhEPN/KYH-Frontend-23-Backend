import app from './app.js'
import mongoose from 'mongoose'
import 'dotenv/config'

const PORT = process.env.PORT || 9999

app.listen(PORT, () => console.log('Server running on port ' + PORT))

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('mongoDB Connected')
  } catch (err) {
    console.log(err.message)
    process.exit(1);
  }
}

connectDB()