// const express = require('express')
// const router = express.Router()
const router = require('express').Router()
const { createNewContact, getAllContacts, getContactById } = require('../models/contactModel')

router.post('/', createNewContact)
router.get('/', getAllContacts)
router.get('/:id', getContactById)

module.exports = router;