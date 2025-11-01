import express from 'express';
const app = express();
const port = 3016;

app.get('/courses', (req, res) => {
  res.json([
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Fullstack' },
    { id: 4, title: 'DevOps' }
  ]);
})

app.get('/courses/:id', (req, res) => {
  res.json([
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Fullstack' },
    { id: 4, title: 'DevOps' }
  ]).find(c => c.id === +req.params.id);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})