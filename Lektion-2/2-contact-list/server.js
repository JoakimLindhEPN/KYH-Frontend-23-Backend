const express = require('express')
const path = require('path')
const fs = require('fs')

const { PrismaClient } = require('@prisma/client')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const DB_CONNECTION = path.join(__dirname, 'contacts.json')

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('server running on: http://localhost:' + PORT))

const prisma = new PrismaClient()

app.get('/api/contacts', async (req, res) => {

  // const contacts = fs.readFileSync(DB_CONNECTION, 'utf8')
  const contacts = await prisma.contact.findMany()

  res.status(200).send(contacts)
})





app.post('/api/contacts', async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body
  
  if(!firstName || !lastName || !phoneNumber) {
    res.status(400).json({ message: 'please enter all the fields' })
  }

  // const contacts = JSON.parse(fs.readFileSync(DB_CONNECTION, 'utf8'))
  // const newContact = {
  //   id: crypto.randomUUID(),
  //   firstName, 
  //   lastName,
  //   phoneNumber
  // }

  // contacts.push(newContact)

  // fs.writeFileSync(DB_CONNECTION, JSON.stringify(contacts, null, 2))
  // res.status(201).json(newContact)
  
  const contact = await prisma.contact.create({
    data: { firstName, lastName, phoneNumber }
  })
  
  res.status(201).json(contact)
})