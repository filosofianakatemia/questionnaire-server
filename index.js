// Load the http module to create an http server.
var http = require('http');
var core = require('../questionnaire-core/core');

var responseWithJSON = function(data){
  response.end(JSON.stringify(data));
};

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  var responseWithJSON = function(data){
  	  response.end(JSON.stringify(data));
  };
  core.findRestaurants(responseWithJSON);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);
