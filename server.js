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

const server = http.createServer(async (request, response) => {
  requestCount++

  switch (request.url) {
    case '/home': {
      try {
        const data = await readFile('pages/home.html')
        response.write(data)
        response.end()
      } catch (err) {
        response.write('something wrong, 500')
        response.end()
      }
      break
    }
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