const express = require('express');
const app = express();
const PORT = 3000;

// Dynamic route with URL parameter 'name'
app.get('/user/:name', (req, res) => {
  const userName = req.params.name; // Access URL parameter
  res.send(`Hello, ${userName}! Welcome to our site.`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
