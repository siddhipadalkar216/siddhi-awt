const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, 'sample.txt');

// Serve static HTML file
app.use(express.static(__dirname));

// Callback method
app.get('/read-callback', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.send('Error reading file!');
    res.send('Callback: ' + data);
  });
});

// Promise method
app.get('/read-promise', (req, res) => {
  fsPromises.readFile(filePath, 'utf8')
    .then(data => res.send('Promise: ' + data))
    .catch(() => res.send('Error reading file!'));
});

// Async/Await method
app.get('/read-async', async (req, res) => {
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    res.send('Async/Await: ' + data);
  } catch (err) {
    res.send('Error reading file!');
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
