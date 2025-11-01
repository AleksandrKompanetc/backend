import express from 'express';
const app = express();
const port = 3012;

app.get('/', (req, res) => {
  res.json({message: 'IT-INCUBATOR'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})