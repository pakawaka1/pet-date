const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true, lowercase: true},
  firstName: {type: String, required: true, lowercase: true},
  lastName: {type: String, required: true, lowercase: true},
  phone: {type: String, required: true},
  username: {type: String, required: true, unique: true, lowercase: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
