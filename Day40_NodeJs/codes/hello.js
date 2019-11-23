const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    response.write('Hello, World\n');
    
    // Tell the server that all of the response headers and body have been send
    response.end();
}).listen(1337);