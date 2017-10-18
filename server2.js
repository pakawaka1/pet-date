
//const MongoClient = require('mongodb').MongoClient;

//var db = MongoClient.connect("mongodb://dog:noinstructor2@ds121665.mlab.com:21665/pets");


//db.Pets.find()

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://dog:noinstructor2@ds121665.mlab.com:21665/pets", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  const pet = {
  	"photo": "../assets/img/petphotos/sophie.jpg",
      "name": "Sophie",
      "type": "Dog",
      "id": "A12345",
      "size": "Small",
      "energy": "High",
      "age": "2 yrs",
      "rating": 4
  }

  db.collection('Pets', function(err,collection) {}).insert(pet);
  store = db.collection('Pets').findOne({"name": "Sophie"}, function(err,item) {console.log(item)});
});