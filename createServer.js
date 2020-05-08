let http = require('http');

let server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello titans'); 
});

server.listen(5500, '127.0.0.1');
console.log('titan space is listening to port 5500');