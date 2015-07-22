var mongoose = require('mongoose');

var DiarySchema = new mongoose.Schema({
  entry: String,
  date: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Diary', DiarySchema);