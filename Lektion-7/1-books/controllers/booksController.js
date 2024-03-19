const router = require('express').Router()
const { getAllBooks, getBookById, createBook } = require('../models/booksModel')

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', createBook)

module.exports = router