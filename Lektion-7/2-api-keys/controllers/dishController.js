const router = require('express').Router()
const { getAll, getRandom, createDish } = require('../models/dishModel')



router.post('/', createDish)
router.get('/', getAll)
router.get('/random', getRandom)


module.exports = router