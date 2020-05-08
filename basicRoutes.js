let fs = require('fs');

let http = require('http');

let server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    if(req.url==='/home'|| req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url==='/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/titans'){
        let titans =[{name: 'joca', age: 90}, {name:'pharaoh', age: 999}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(titans));
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    
    
});

server.listen(5500, '127.0.0.1');
console.log('titan space is listening to port 5500');

