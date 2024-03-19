const mongoose = require('mongoose')


const usageSchema = mongoose.Schema({
  date: String,
  count: Number
})

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  apiKey: {
    type: String,
    required: true
  },
  usage: {
    type: [usageSchema]
  }
}, { timestamps: true })

module.exports = mongoose.model('Application', applicationSchema)


// usage: [
//   { date: '2024-03-19', count: 4 },
//   { date: '2024-03-20', count: 3 },
//   { date: '2024-03-21', count: 3 },
// ]