const router = require('express').Router()
const { validateApiKey } = require('../middleware/authMiddleware')
const { getAll, getRandom, createDish } = require('../models/dishModel')


router.post('/', validateApiKey, createDish)
router.get('/', validateApiKey, getAll)
router.get('/random', validateApiKey, getRandom)


module.exports = router