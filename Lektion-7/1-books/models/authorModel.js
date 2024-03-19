const Author = require('../schemas/authorSchema')

exports.addAuthor = async (req, res) => {

  try {
    const { firstName, lastName } = req.body

    if(!firstName || !lastName) {
      res.status(400)
      throw new Error('You need to enter all the fields')
    }

    const author = await Author.create({ firstName, lastName })
    res.status(201).json(author)

  } 
  catch (err) {
    res.json({
      message: err.message
    })
  }

}


exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find()
    res.status(200).json(authors)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}