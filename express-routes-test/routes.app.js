var express = require('express');
var router = express.Router();

module.exports = function(app) {
    router.get('/', function(req, res) {
        res.send('Hello!');
    });

    router.get('/about', function(req, res) {
        res.send('this is only a test');
    });

    // Apply routes
    app.use('/', router);
};
