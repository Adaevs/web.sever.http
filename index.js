const http = require('http'); 
const url = require('url');

const server = http.createServer((req, res) => { 
    switch (req.url) {
        case '/statistic':
    res.writeHead(200, {'content-type': 'text/plane ; charset=utf-8'});
    res.end('по запросу '  + req.url +  ' не найдена статистика');
    
    case '/world': 
    res.writeHead(200, {'content-type': 'text/plane ; charset=utf-8'});
    res.end("world");

    default:
    res.writeHead(200, {'content-type': 'text/plane ; charset=utf-8'});
    res.end('Не найден обработчик по вашему запросу');
}
}); 
server.listen(3000);
console.log("Мы отслеживаем порт 3000");

