const http = require('http');

var routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Hello, World');
    },
    '/foo': function foo(request, response) {
        response.writeHead(200);
        response.end('You are now viewing foo');
    }
}

http.createServer((request, response) => {
    console.log(request.url);
    if (request.url in routes) {
        return routes[request.url](response, response);
    }
    
    response.writeHead(400);
    response.end(http.STATUS_CODES[404]);
}).listen(1337);