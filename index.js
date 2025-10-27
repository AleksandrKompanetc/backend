const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/about', (req, res) => {
  res.send('About Page');
})

app.get('/samurai', (req, res) => {
  res.send('Samurai Page');
})

app.post('/samurais', (req, res) => {
  res.send('We have created a new samurai!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${post}`)
})