const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const port = 5000;

var db;

MongoClient.connect("mongodb://dog:noinstructor2@ds121665.mlab.com:21665/pets", function(err, database) {
  if(!err) {
    console.log("We are connected");
  }
  db = database;
});


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));


app.get("/api/pets", function(req, res) {
	pets = [];
	cursor = db.collection('Pets').find();

	cursor.each((err, doc) => {
		if (doc != null) {
			pets.push(doc);
		} else {
			res.send(pets);
		}
	})
	//console.log(allPetsArray);
 	//db.collection('Pets').findOne({'name': 'Sophie'}, function(err,item) {
 		//console.log(item.toArray());
 		//const temp1 = JSON.stringify(item);
 		//console.log(temp1)
 		//res.send(temp1);
 	//});	
});


app.get('*', (req, res) => {
 	res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(port, function(){
	console.log("Server is running on port " + port);
})
