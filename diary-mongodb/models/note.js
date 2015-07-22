var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  title: String,
  text: String,
  tag: String,
  date: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Note', NoteSchema);