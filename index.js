const http = require('http'); 

const server = http.createServer((req, res) => { 
    res.end('Привет мир!'); 
}); 

server.listen(3000); 
console.log("Мы отслеживаем порт 3000");