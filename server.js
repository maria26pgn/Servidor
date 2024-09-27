const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log(req.method , req.url, req.url === '/')
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.white('<h1>pagina principal</h1>');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    fs.readFile('404.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Erro ao ler o arquivo 404</h1>');
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
    console.log('http://localhost:8080/')
});