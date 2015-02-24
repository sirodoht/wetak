/**
 * @fileOverview Main backend js file
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var parse = require('./parse');

var app = express();

// middleware for JSON POST body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/parse', function(req, res) {
  res.send(req.body.dataString);
  console.log(req.body);
  parse.lpParser(req.body.dataString);
});

var server = app.listen(app.get('port'), function() {
  console.log('App listening at http://localhost:%s/', app.get('port'));
});

app.set('views', path.join(__dirname, '../front/views'));
app.set('view engine', 'jade');

app.use(express.static('front/static'));
