import * as http from 'node:http'
import * as fs from 'node:fs'

const server = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return
  console.log(req.url, req.method)

  let filename;

  switch(req.url) {
    case '/':
      filename = 'index.html'
      res.statusCode = 200
      res.setHeader('Content-type', 'text/html')
      break;

    case '/about':
      filename = 'about.html'
      res.statusCode = 200
      res.setHeader('Content-type', 'text/html')
      break;

    default:
      filename = '404.html'
      res.statusCode = 404
  }


  fs.readFile('./src/'+filename, (err, data) => {
    if(err) {
      console.log(err)
      return
    }


    res.end(data)

  })
})



const PORT = process.env.PORT || 9999;

server.listen(PORT, () => console.log('server running on http://localhost:' + PORT))