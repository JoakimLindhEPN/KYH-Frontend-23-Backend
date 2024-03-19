const router = require('express').Router()
const { addAuthor, getAuthors } = require('../models/authorModel')

router.post('/', addAuthor)
router.get('/', getAuthors)

module.exports = router