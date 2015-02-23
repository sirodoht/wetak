var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/parse', function(req, res) {
  res.send(req.body);
  console.log(req.body.dataString);
});

var server = app.listen(app.get('port'), function() {
  console.log('App listening at http://localhost:%s/', app.get('port'));
});

app.set('views', path.join(__dirname, '../front/views'));
app.set('view engine', 'jade');

app.use(express.static('front/static'));
