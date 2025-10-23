const http = require('http')

let requestCount = 0

const server = http.createServer((req, res) => {
  requestCount++

  switch(req.url) {
    case '/students':
      res.write('STUDENTS')
      break
    case '/courses':
      res.write('FRONT + BACK')
      break
    default:
      res.write('404 Not found')
  }

  res.write('Server work'+ requestCount)
  res.end()
})

server.listen(3003)