const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const DB_CONNECTION = path.join(__dirname, 'contacts.json')

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('server running on: http://localhost:' + PORT))


app.get('/api/contacts', (req, res) => {

  const contacts = fs.readFileSync(DB_CONNECTION, 'utf8')
  res.status(200).send(contacts)
})





app.post('/api/contacts', (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body
  
  if(!firstName || !lastName || !phoneNumber) {
    res.status(400).json({ message: 'please enter all the fields' })
  }

  const contacts = JSON.parse(fs.readFileSync(DB_CONNECTION, 'utf8'))
  const newContact = {
    id: crypto.randomUUID(),
    firstName, 
    lastName,
    phoneNumber
  }

  contacts.push(newContact)

  fs.writeFileSync(DB_CONNECTION, JSON.stringify(contacts, null, 2))
  res.status(201).json(newContact)
})