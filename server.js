// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
var bodyParser = require('body-parser');
var validate = require('mongoose-validator');
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('cool stuff on: 5000');
});
