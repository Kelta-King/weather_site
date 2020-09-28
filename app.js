var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let msg = "Hey weather";
    
    res.end(msg);
});
server.listen();
