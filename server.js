var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/views/client.html');
});



var port = Number(process.env.PORT || 3000);

server.listen(port);

console.log('server running on ' + port);