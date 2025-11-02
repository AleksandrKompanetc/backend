import express from 'express';
const app = express();
const port = 3016;

const db = {
  courses: [
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Fullstack' },
    { id: 4, title: 'DevOps' }]
}

app.get('/courses', (req, res) => {
  res.json(db.courses);
})

app.get('/courses/:id', (req, res) => {
  const foundCourse = [
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Fullstack' },
    { id: 4, title: 'DevOps' }
  ].find(c => c.id === +req.params.id);

  if (!foundCourse) {
    res.sendStatus(404);
    return;
  }
  res.json(foundCourse);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})