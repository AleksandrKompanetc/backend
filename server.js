const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Server work')
  res.end()
})

server.listen(3003)