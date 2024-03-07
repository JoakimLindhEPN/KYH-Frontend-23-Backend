const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

  // _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: [true, 'you need a firstName'] },
  lastName: { type: String, default: 'Andersson' },
  phoneNumber: { type: String, required: true }

})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;