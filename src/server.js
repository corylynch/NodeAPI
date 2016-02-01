var express = require('express');
var body_pase = require('body-parser');
var app = express();

var port = 3000;

router.get('/', function(req, res) {
	res.json({hello: "world"});
});

router.get('/v1', function(req, res) {
	res.json({hello: "world"});
});

router.get('/status', function(req, res) {
	res.json({healthy: true});
});

router.get('/user/:id', function(req, res) {
	res.json({user: {id: req.params.id}});
});

app.use('/api', require('../routes/api.js')(express));
 
var server = app.listen(port, function() {
	console.log('Server Active on', port);
});

module.exports = server;