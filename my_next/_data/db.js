// server.js
const express = require('express');
const app = express();
const data = require('./db.json');

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
