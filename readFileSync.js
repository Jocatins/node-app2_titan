let fs = require('fs');

//readFile sync

let readMe = fs.readFileSync('filename', 'utf8');

console.log(readMe);

//writeFile sync

let fs = require('fs');

let readMe = fs.readFileSync('file name', 'uft8');
fs.writeFileSync('writeMe.txt', readMe);

// readable stream

let myReadStream = fs.createReadStream(__dirname + '/filename', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    console.log(chunk);
});

// writeable stream

let myReadStream = fs.createReadStream(__dirname + '/filename', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/filename');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
});