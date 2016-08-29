'use strict';

// External modules
var express       = require('express');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

// Init App
var app           = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
require('./routes.api')(app);
require('./routes.app')(app);

// Unhandled requests
app.use(function(req, res, next) {
  console.error('404 : ' + req.url );
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling
app.use(function(err, req, res, next) {
  console.error( err.stack);
  res.status(err.status || 500).send({
    message: err.message,
    error: err.stack
  });
});

// Run app
var port = process.env.PORT || 8080;
app.listen(port);

console.log('All systems go on port ' + port);

exports = module.exports = app;
