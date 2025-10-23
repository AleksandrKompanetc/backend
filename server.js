const http = require('http')
const fs = require('fs')

let requestCount = 0

const server = http.createServer((request, response) => {
  requestCount++

  switch (request.url) {
    case '/home':
      fs.readFile('pages/home.html' (error, data) => {
        if (error) response.write(error)
        else response.write(data)
        response.end()
      }) //'best free online'
      break
    default:
      response.write('404 Not found')
      response.end()
  }

  response.write('Server work' + requestCount)
})

server.listen(3006)