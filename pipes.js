//piping with a server

let fs = require('fs');

let http = require('http');

let server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let myReadStream = fs.createReadStream(__dirname + '/gypsy.txt', 'utf8');
    myReadStream.pipe(res);
    
    
});

server.listen(5500, '127.0.0.1');
console.log('titan space is listening to port 5500');

//piping without a server

let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/filename', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/filename');

myReadStream.pipe(myWriteStream);