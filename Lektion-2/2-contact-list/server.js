const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('server running on: http://localhost:' + PORT))


app.get('/api/contacts', (req, res) => {

  const contacts = fs.readFileSync(path.join(__dirname, 'contacts.json'), 'utf8')
  res.status(200).send(contacts)
})