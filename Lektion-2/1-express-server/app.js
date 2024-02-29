const express = require('express')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('server: http://localhost:' + PORT))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'about.html'))
})

app.get('/about-us', (req, res) => {
  res.redirect('/about')
})


// Middleware
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'src', '404.html'))
})