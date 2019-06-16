const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plane ; charset=utf-8' });

  switch (req.method) {
  case 'GET': {
    res.end(req.method);
    console.info(req.method);
    break;
  }
  case 'POST': {
    res.end('POST');
    console.info(req.method);
    break; }
  case 'PUT': {
    res.end('PUT');
    console.info('PUT');
    break;
  }
  case 'SELECT': {
    res.end('SELECT');
    console.info('SELECT'); break; }
  case 'DELETE': {
    res.end('DELETE');
    console.info('DELETE');
    break;
  }
  default: {
    res.end('Не найден обработчик по вашему запросу');
    console.info(req.method); break; }
  }
}); server.listen(3000); console.info('Мы отслеживаем порт 3000');
