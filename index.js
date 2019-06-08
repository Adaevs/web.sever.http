const http = require('http'); // переменная или константа и модуль  

const server = http.createServer(function(req, res) {  // Создание сервера так же запрос и выдача
    res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'}); //1. запрос от сервера, 2. что будем выводить, 3. кодировка для текста. Заместо plain можно вставить html или любой другой файл. 
    res.end('Привет мир!'); // выводим информацию
}); 

server.listen(3000, '127.0.0.1'); // port
    console.log("Мы отслеживаем порт 3000"); //вывод в терминал.