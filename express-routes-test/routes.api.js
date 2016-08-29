var express = require('express');
var router = express.Router();

module.exports = function(app) {
    router.get('/item', function(req, res) {
        res.send('this is an item');
    });

    router.get('/picture', function(req, res) {
        res.send('this is a picture');
    });

    // Apply routes
    app.use('/api', router);

};
