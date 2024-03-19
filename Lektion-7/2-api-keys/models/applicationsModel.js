const Application = require('../schemas/applicationSchema')

exports.createNewApiUser = async (req, res) => {
  try {
    
    const { name } = req.body

    if(!name) {
      res.status(400)
      throw new Error('You need to enter a name of your application')
    }

    const application = await Application.create({
      name,
      apiKey: crypto.randomUUID()
    })

    res.status(201).json({ api_key: application.apiKey })

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}