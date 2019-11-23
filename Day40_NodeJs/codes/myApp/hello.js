// Import the top-level function of express
const express = require('express');

// Create an Express application using the top-level function
const app = express();

console.log('hi');
// Define port number as 3000
const port = process.env.PORT || 3000;

console.log(port);

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
    response.send('Hello, world');
});

// Make the app listen on port 3000
app.listen(port, function(){
    console.log(`Server listening on the http://localhost:${port}`);
});