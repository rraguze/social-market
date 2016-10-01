var express = require('express');
var app = module.exports = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// API Routes
app.use('/api/v1/users',    require('./routes/users'));
app.use('/api/v1/groups',   require('./routes/groups'));
app.use('/api/v1/products', require('./routes/products'));
app.use('/api/v1/markets',  require('./routes/markets'));

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api', function(req, res) {
  res.send('Hello form root route.');
});

app.get('/times', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += i + ' ';
  response.send(result);
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'));
  });
}
