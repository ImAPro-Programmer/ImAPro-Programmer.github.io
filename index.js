const express = require('express');
const app = express();
const cors = require('cors'); // to allow frontend to call backend

app.use(cors()); // middleware for cross-origin requests

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});
