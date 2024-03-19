const Book = require('../schemas/bookSchema')

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books)


  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getBookById = async (req, res) => {
  try {
    
    const book = await Book.findById(req.params.id).populate('author')

    res.status(200).json(book)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.createBook = async (req, res) => {
  try {
    
    const { title, year, author } = req.body

    if(!title || !year || !author) throw new Error('Please enter all the fields')

    const book = await Book.create({ title, year, author })
    res.status(201).json(book)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}