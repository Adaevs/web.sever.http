const http = require('http'); 
const url = require('url');

const server = http.createServer((req, res) => { 
    console.log("URL страницы: " + req.url);
    res.end('Я надеюсь ты имел ввиду в терминале'); 
}); 
server.listen(3000, ); 
console.log("Мы отслеживаем порт 3000");