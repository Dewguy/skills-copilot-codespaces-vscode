// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments from comments.json
const comments = require('./comments.json');

// Display a message for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the comments web service');
});

// Display a list of comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the web server
app.listen(port, () => {
  console.log(`Web server listening on http://localhost:${port}`);
});