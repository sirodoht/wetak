var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Hello world!');
});

var server = app.listen(app.get('port'), function() {
  console.log('App listening at http://localhost:%s/', app.get('port'));
});
