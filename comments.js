//create a new server
//import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

// Start the server
server.listen(3000, 'localhost', () => {
  console.log('Server is running on http://localhost:3000');
});
