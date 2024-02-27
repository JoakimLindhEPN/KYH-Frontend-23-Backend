import * as http from 'node:http'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'url'

// const http = require('http')
// const fs = require('fs')
// const path = require('path')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {
  let filename = req.url === '/' ? 'index.html' : req.url
  let extname = path.extname(filename)
  let contentType = 'text/html'
  
  switch(extname) {
    case '.css':
      contentType = 'text/css'
      break;
    case '.js':
      contentType = 'text/javascript'
      break;
    case '.json':
      contentType = 'application/json'
      break;
    case '.jpg':
      contentType = 'image/jpg'
      break;
    case '.png':
      contentType = 'image/png'
      break;
    case '.ico':
      contentType = 'image/x-icon'
      break;
    }
    
    if(contentType === 'text/html' && extname === '') {
      filename += '.html'
    }
    
  let filepath = path.join(__dirname, 'src', filename)

  // console.log({extname})

  fs.readFile(filepath, (err, data) => {
    if(err) {
      
      if(err.code === 'ENOENT') {
        fs.readFile('./src/404.html', (err, test) => {
          if(err) {
            console.log(err)
            return
          }

          res.writeHead(404, { 'Content-type': 'text/html' })
          res.end(test, 'utf8')
        })
      }
      else {

        res.writeHead(500)
        res.end(`Server error: ${err.code}`)
      }
      // return
    } else {

      res.writeHead(200, { 'Content-type': contentType })
      res.end(data, 'utf8')

    }
  })

})

const PORT = process.env.PORT || 9999;

server.listen(PORT, () => console.log('server running on http://localhost:' + PORT))