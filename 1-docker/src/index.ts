import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from TypeScript + Docker!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));