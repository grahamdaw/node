var mongoose = require('mongoose');

var TodoScehma = new mongoose.Schema({
  text: String,
  tag: String,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoScehma);