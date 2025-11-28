const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, Node.js Modules!');

// Read from the file
const data = fs.readFileSync('example.txt', 'utf8');
console.log("File Content:", data);