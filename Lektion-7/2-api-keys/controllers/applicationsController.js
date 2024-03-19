const router = require('express').Router()
const { createNewApiUser } = require('../models/applicationsModel')

router.post('/', createNewApiUser)

module.exports = router