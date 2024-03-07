const Contact = require('../schemas/contactSchema')
const mongoose = require('mongoose')

exports.createNewContact = (req, res) => {

  const { firstName, lastName, phoneNumber } = req.body;
  if(!firstName || !phoneNumber) {
    res.status(400).json({ message: 'Please enter all fields correctly'})
    return
  }

  Contact.create({ firstName, lastName, phoneNumber })
    .then(contact => {
      res.status(201).json(contact)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong!' })
    })

}



exports.getAllContacts = (req, res) => {
  Contact.find()
    .then(data => {
      res.status(200).json(data)
    })
}




exports.getContactById = (req, res) => {
  if(!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: 'ObjectId not valid' })
  }
  Contact.findById(req.params.id)
    .then(data => {
      if(!data) {
        return res.status(404).json({ message: 'Not found!' })
      }
      res.status(200).json(data)
    })
}