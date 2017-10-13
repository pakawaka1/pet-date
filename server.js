var angularserver = require('angularjs-server');
var express = require('express');
var fs = require('fs');

var port = 5000

var app = express();

app.use(express.static(__dirname, './dist'));

app.get('*', (req, res) => {
 	res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, function(){
	console.log("Server is running on port " + port);
})