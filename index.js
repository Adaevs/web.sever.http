const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
  case '/statistic': {
    res.writeHead(200, { 'content-type': 'text/plane; charset=utf-8 ' });
    res.end('По запросу /statistic не найдена статистика');
    console.info('По запросу /statistic Не найдена статистика'); break; }
  case '/world': {
    res.end('world');
    console.info('world');
    break; }
  default: {
    res.end('Не найден обрабочик ппо вашему запросу');
    console.info('Не найден обработчик по вашему запросу');
    break;
  }
  }
});
server.listen(3000);
console.info('Мы отслеживаем порт 3000');
