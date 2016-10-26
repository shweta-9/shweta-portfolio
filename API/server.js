// initialize Express
var express = require('express');
// run Express
var app = express();

app.use(express.static(__dirname + './../APP'));

app.get('/', function(req, res) {
	res.send('Express is running!');
});




app.listen(8080, function() {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});




