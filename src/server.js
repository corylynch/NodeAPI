var express = require('express');
var body_pase = require('body-parser');
var app = express();

var port = 3000;

// app.get('/', function(req, res){
// 	res.json({hello:"world"});
// });

app.use('/api', require('../routes/api.js')(express));
 
var server = app.listen(port, "162.243.55.178", function() {
	console.log('Server Active on', port);
});

module.exports = server;