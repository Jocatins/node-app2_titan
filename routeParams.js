let express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send('gypsy world');
});
app.get('/profile/:id', function(req, res){
    res.send('You requested to see the profile with the id of ', + req.params.id);
});
app.listen(5500);