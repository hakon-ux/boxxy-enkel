const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Simple Server Works!</h1><p>Tid: ' + new Date() + '</p>');
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Simple server running on http://127.0.0.1:8080');
});

// Test connection
setTimeout(() => {
    const http2 = require('http');
    const req = http2.get('http://127.0.0.1:8080', (res) => {
        console.log('Self-test: Server responds with status', res.statusCode);
    });
    req.on('error', (err) => {
        console.log('Self-test failed:', err.message);
    });
}, 1000);