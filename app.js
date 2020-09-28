var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let msg = "Hey weather! I am Kelta";
    
    res.end(msg);
});
server.listen();
