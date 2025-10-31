import express from 'express';
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  const a = 8;
  if (a > 5) {
    res.send('OK');
  } else {
    res.send('Not OK');
  }
  // res.send('Hello world!!!!!!!!');
})

app.get('/samurais', (req, res) => {
  res.send('Samurais!!!!!!!!!!');
})

app.get('/about', (req, res) => {
  res.send('About us page');
})

app.post('/samurais', (req, res) => {
  res.send('We have created a new samurai!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})