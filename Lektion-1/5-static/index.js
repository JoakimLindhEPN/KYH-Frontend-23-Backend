const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'src')))

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log('server runnig on http://localhost:' + PORT))