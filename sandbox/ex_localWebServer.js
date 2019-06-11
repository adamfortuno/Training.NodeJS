/*
http://localhost:4242/
*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This is my ghetto ass webserver.\n');
});

server.listen(4242, function() {
    console.log('Server is running...');
});
