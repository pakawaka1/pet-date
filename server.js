const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const PORT = process.env.PORT || 5000

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

app.get("/api/pet/:id", function(req, res) {
	const id = req.params.id;
	console.log(id);
	db.collection('Pets').findOne({"_id": ObjectId(id)}, function(err, item) {
		if (err) {
			res.send(err);
		} else {
			console.log(item);
			const pet = {
				photo: item.photo,
				name: item.name,
				type: item.type,
				id: item._id,
				size: item.size,
				energy: item.energy,
				age: item.age,
				rating: item.rating
			};
			res.send(pet);
		}
	});
});

app.get("/api/schedule/:id", function(req, res) {
	const id = req.params.id;
	console.log(id);
	db.collection('Pets').findOne({"_id": ObjectId(id)}, function(err, item) {
		if (err) {
			res.send(err);
		} else {
			console.log(item);
			const pet = {
				photo: item.photo,
				name: item.name,
				type: item.type,
				id: item._id,
				size: item.size,
				energy: item.energy,
				age: item.age,
				rating: item.rating
			};
			res.send(pet);
		}
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
	console.log("Got here")
	db.collection('Users').findOne({'email': req.body.email}, function(err, item) {
		if(err) {
			console.log(err);
		} else {
			if (item != null) {
				res.send("1")
			} else {
				db.collection('Users').findOne({'username': req.body.username}, function(err, item) {
					if(err) {
						console.log(err);
					} else {
						if (item != null) {
							res.send("2")
						} else {
							if (!req.body.password.match("^[A-Za-z0-9]{6,16}$")) {
								res.send("3");
							} else {
								if (req.body.password != req.body.repassword) {
									res.send("4");
								} else {
									const user = {
										email: req.body.email,
				      					firstName: req.body.firstname,
				      					lastName: req.body.lastname,
				      					phone: req.body.phonenumber,
				      					username: req.body.username,
										password: req.body.password

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
			}
		}
	});
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
      id: item._id
    };
    console.log("user being sent is: " + user);
    console.dir(user);
    res.send(user);
  });
});

/* Api call, to return all history records for all users. */
app.get("/api/history", function(req, res) {
  let hist = [];
  let cursor = db.collection('history').find();

  cursor.each((err, doc) => {
    if (doc != null) {
      hist.push(doc);
    } else {
      res.send(hist);
    }
  });
});

app.post("/api/history", function(req, res) {
  console.log("arrived at post history");
  const history = {
    pet_id: ObjectId(req.body.pet_id),
    user_id: ObjectId(req.body.user_id),
    petname: req.body.petname,
    date: req.body.date,
    activity: req.body.activity,
    rating: ""
  };
  console.log(history);
  db.collection('history').insertOne(history, function(err, item) {
    console.log("arrived here");
    res.send(200);
  });
});

/* Api call, to return all history records for ONE users. */
app.get("/api/history/:id", function(req, res) {
  let hist = [];
  let userid = req.params.id;

  console.log('/api/history/' + userid );

  let cursor = db.collection('history').find({user_id:ObjectId(userid)});
  // Example call:
  // db.getCollection('history').find({user_id:ObjectId("59f10d76fda7d403d82e75cd")})

  cursor.each((err, doc) => {
    if (doc != null) {
      hist.push(doc);
    } else {
      res.send(hist);
    }
  });
});


//app.listen(port, function(){
//	console.log("Server is running on port " + port);
//})


//Index Route
app.get ('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//Start Server

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))