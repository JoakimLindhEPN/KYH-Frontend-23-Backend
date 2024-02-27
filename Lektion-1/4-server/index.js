// import * as http from 'node:http'
// import * as fs from 'node:fs'
// import * as path from 'node:path'

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  
  let filename = req.url === '/' ? 'index.html' : req.url + '.html'

  let filepath = path.join(__dirname, 'src', filename)

  fs.readFile(filepath, (err, data) => {
    if(err) {
      console.log(err)
      return
    }

    res.end(data)

  })

})



const PORT = process.env.PORT || 9999;

server.listen(PORT, () => console.log('server running on http://localhost:' + PORT))