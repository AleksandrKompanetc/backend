const http = require('http')
const fs = require('fs')

let requestCount = 0

const server = http.createServer((request, response) => {
  requestCount++

  switch (request.url) {
    case '/home':
      const data = fs.readFileSync('pages/home.html') //'best free online'
      response.write(data)
      break
    default:
      response.write('404 Not found')
  }

  response.write('Server work' + requestCount)
})

server.listen(3006)