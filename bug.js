const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the response hangs indefinitely
  // res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});