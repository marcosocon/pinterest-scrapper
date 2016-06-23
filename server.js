var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var routes = require('./routes');
var app = express();

mongoose.connect('mongodb://localhost/pinterest-scrapper');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.listen(3000, function(){
	console.log("Express server running at localhost:3000, enjoy!");
});
