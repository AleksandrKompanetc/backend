const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => {
  requestCount++

  switch (request.url) {
    case '/home':
      const data = 'best free online'
      response.write(data)
      break
    default:
      response.write('404 Not found')
  }

  response.write('Server work' + requestCount)
})

server.listen(3001)