let fs = require('fs');
//async file read method
fs.readFile('filename', 'utf8', function(err, data){
    console.log(data);
});

//async file write method
fs.readFile('filename', 'utf8', function(err, data){
    fs.writeFile('filename', data);
});