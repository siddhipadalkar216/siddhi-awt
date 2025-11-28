const express = require('express');
const app = express();
const PORT = 3000;

// Middleware function to log requests
function logRequests(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url}`);
  next(); // Pass control to next middleware or route handler
}

// Apply middleware globally
app.use(logRequests);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
