const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 9999;
const mongoURI = 'mongodb+srv://Joakim:BytMig123@cluster0.fwykixu.mongodb.net/myFirstDb?retryWrites=true&w=majority&appName=Cluster0'

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log('Server running on: http://localhost:' + PORT))

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err.message))


const contactSchema = mongoose.Schema({

  // _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: [true, 'you need a firstName'] },
  lastName: { type: String, default: 'Andersson' },
  phoneNumber: { type: String, required: true }

})

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contacts', (req, res) => {

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

})


app.get('/api/contacts', (req, res) => {
  Contact.find()
    .then(data => {
      res.status(200).json(data)
    })
})


app.get('/api/contacts/:id', (req, res) => {
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
})