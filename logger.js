module.exports = function(request, response, next) {
  var start = +new Date();
  var stream = process.stdout;
  var method = request.method;
  var url = request.url;

  var log = function() {
    var duration = +new Date() - start;
    var message = method + ' on ' + url + '\ntook ' + duration + ' ms\n\n';
    stream.write(message);
  };

  response.on('finish', log);

  next();
};

