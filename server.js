var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.redirect('/blocks')
});

app.get('/blocks', function(request, response) {
  var blocks = ['one', 'two', 'three'];
  response.send(blocks);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening on', port);
});

