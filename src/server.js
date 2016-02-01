var express = require('express');
var body_pase = require('body-parser');
var app = express();

var port = 3000;

app.get('/', function(req, res) {
	res.json({hello: "world"});
});

app.get('/v1', function(req, res) {
	res.json({hello: "world"});
});

app.get('/status', function(req, res) {
	res.json({healthy: true});
});

app.get('/user/:id', function(req, res) {
	res.json({user: {id: req.params.id}});
});

app.use('/api', require('../routes/api.js')(express));
 
var server = app.listen(port, function() {
	console.log('Server Active on', port);
});

module.exports = server;