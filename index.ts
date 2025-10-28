import express = require('express');
const app = express();
const port = 3020;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/about', (req, res) => {
  res.send('About Page');
})

app.get('/samur', (req, res) => {
  res.send('Hello samurai, Sasha!');
})

app.get('/samurais', (req, res) => {
  res.send('Hello samurai, Sasha!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})