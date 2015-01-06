var express = require('express');
var app = express();
var logger = require('./logger');

app.use(express.static('public'));
app.use(logger);

app.get('/parts', function(request, response) {
  response.redirect(301, '/blocks');
});

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  response.send(blocks);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening on', port, '...\n');
});

