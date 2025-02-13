// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { name: 'Stefan', comment: 'Hello there!' },
  { name: 'Alice', comment: 'Hi!' },
  { name: 'John', comment: 'Hello!' }
];

// Create route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});