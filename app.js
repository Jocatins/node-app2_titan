let express = require('express');

let bodyParser = require('body-parser');

let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/assets',express.static('assets'));



app.get('/', function(req, res){
    res.render('index');
});
app.get('/contact', function(req, res){
    res.render('contact');
});
app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function(req, res){
    let data = {age: 34, job: 'titan', hobbies: ['coding','gaming']};
    res.render('profile', {person: req.params.id, data: data});
});
app.listen(5500);
