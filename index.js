// Load the http module to create an http server.
var http = require('http');
var core = require('../questionnaire-core/core');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  var data = core.findRestaurants();
  response.end(JSON.stringify(data));
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);
