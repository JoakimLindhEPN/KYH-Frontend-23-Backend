const Application = require('../schemas/applicationSchema')

const API_MAX = 5

exports.validateApiKey = async (req, res, next) => {

  try {
    const api_key = req.query.api_key
  
    if(!api_key) {
      res.status(403)
      throw new Error('No API Key found')
    }

    const app = await Application.findOne({ apiKey: api_key })

    if(!app) {
      res.status(403)
      throw new Error('Could not find the API key')
    }

    const today = new Date().toISOString().split('T')[0]
    const index = app.usage.findIndex(u => u.date === today)

    if(index < 0) {
      // datumet finns INTE i usage arrayen
      app.usage.push({ date: today, count: 1 })
    }
    else {
      // Datumet finns redan i usage arrayen
      if(app.usage[index].count >= API_MAX) {
        res.status(429)
        throw new Error('Max API calls exceeded')
      }

      app.usage[index].count ++
    }

    console.log('COUNT:  ', app.usage)
    await Application.updateOne({ _id: app._id }, { usage: app.usage })
    next()
    
  } catch (err) {
    res.json({
      message: err.message
    })
  }


}