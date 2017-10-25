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
});

app.get("/api/pet", function(req, res) {
	//const name = 'req.body.name';
	const name = 'Sophie';
	db.collection('Pets').findOne({'name': name}, function(err, item) {
		console.log(item);
		const pet = {
			photo: item.photo,
			name: item.name,
			type: item.type,
			id: item.id,
			size: item.size,
			energy: item.energy,
			age: item.age,
			rating: item.rating
		};
		res.send(pet)
	});
});

app.get("/api/user/profile", function(req, res) {
  console.log("arrived back at serverjs");
  console.log(req.body);
	db.collection('Users').findOne({'email': req.body.email}, function(err, item) {
		const user = {
      		username: item.username,
      		firstName: item.firstName,
      		lastName: item.lastName,
      		email: item.email,
    	};
    res.send(user);
	});
});


app.post("/api/user/auth/register", function(req,res) {
	if(db.collection('Users').findOne({'email': req.body.email})) {
		res.send("1");
	} else {
		if(db.collection('Users').findOne({'username': req.body.username})){
			res.send("2");
		} else {
			if (!req.body.password.match("^[A-Za-z0-9]{6,16}$")) {
				res.send("3");
			} else { 
				if (req.body.password != req.body.repassword) {
					res.send("4");
				} else {
					const user = {
      					username: req.body.username,
      					firstName: req.body.firstName,
      					lastName: req.body.lastName,
      					email: req.body.email,
      					password: req.body.password,
      					phone: req.body.phonenumber
    				};
    				db.collection('Users').insertOne(user, function(err, item){
    					if (err) {
    						res.send("5");
    					} else {
    						res.send("0");
    					}
    				});
				}
			} 
		}
	}
});

app.post("/api/user", function (req, res) {
  const email = req.body.email;
  console.log("req body email: " + email);
  db.collection('Users').findOne({'email': email}, function(err, item) {
    console.log("back from Mongodb" + item);
    console.dir(item);
    const user = {
      username: item.username,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
    };
    console.log("user being sent is: " + user);
    console.dir(user);
    res.send(user);
  });
});

app.get('*', (req, res) => {
 	res.sendfile(path.join(__dirname + '/dist/index.html'));
});


app.listen(port, function(){
	console.log("Server is running on port " + port);
})
