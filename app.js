'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let express = require('express');
var path = require('path');
let http = require('http');
let compression = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let cookieParser = require('cookie-parser');
let passport = require('passport');
let mongoose = require('mongoose');
// leting data models
let User = require('./api/models/user/user.model');
// Connect to MongoDB
mongoose.connect('mongodb://sa:1234qwer@ds121349.mlab.com:21349/testproject', {
  db: {
    safe: true
  }
});

mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Setup server
let app = express();
let server = http.createServer(app);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/users', express.static(path.join(__dirname, 'dist')));

app.use('/api/users', require('./api/models/user')(User));
// Start server
function startServer() {
  app.angularFullstack = server.listen(3000, function() {
    console.log('Express server listening on %d, in %s mode', 3000, app.get('env'));
  });
}

module.exports = app;
