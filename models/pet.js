const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {type: String, required: true, lowercase: true},
  id: {type: String, required: true},
  type: {type: String, required: true},
  size: {type: String, required: true},
  energy: {type: String, required: true},
  age: {type: String, required: true},
  status: {type: String, required: true, lowercase: true},
  bio: {type: String, required: true},
  comments: [{comment: {type: String}, commentator: {type: String}}],
  datesScheduled: [{date: {type: Date}, user: {type: String}}],
});

module.exports = mongoose.model('Pet', petSchema);
