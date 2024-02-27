const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request made')
  console.log(req.url)

  res.end('<h1>Hej</h1>')
})

server.listen(9999, () => console.log('http://localhost:9999'))