var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  birthday: String,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);