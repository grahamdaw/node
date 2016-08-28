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

// Add Routes
require('./api.routes')(app);
require('./app.routes')(app);



// Run app
var port = process.env.PORT || 8080;
app.listen(port);

console.log('All systems go on port ' + port);

exports = module.exports = app;
