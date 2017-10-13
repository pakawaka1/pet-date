const express = require('express');
const path = require('path');
const fs = require('fs');

const port = 5000

const app = express();

app.use(express.static(__dirname + '/dist'));


app.get('*', (req, res) => {
 	res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(port, function(){
	console.log("Server is running on port " + port);
})
