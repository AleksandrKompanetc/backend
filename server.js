const http = require('http')
const fs = require('fs')

let requestCount = 0

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
  }, ms)
  })
}

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
        else resolve(data)
    })
  })
}

const server = http.createServer((request, response) => {
  requestCount++

  switch (request.url) {
    case '/home':
      fs.readFile('pages/home.html', (error, data) => {
        if (error) response.write(error)
        else response.write(data)
        response.end()
      }) //'best free online'
      break
    case '/about': {
      await delay(3000)
      response.write('ABOUT')
      response.end()
      break
    }
    default:
      response.write('404 Not found')
      response.end()
  }

  response.write('Server work' + requestCount)
})

server.listen(3006)