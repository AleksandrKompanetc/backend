const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/samurais', (req, res) => {
  res.send('Samurais!');
})

app.post('/samurais', (req, res) => {
  res.send('We have created a new samurai!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})