var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function doneReading(err, dirContent) {
			if (err) {
				return callback(err);
			}
			
			var filtered = dirContent.filter( function (item) {
				if ( path.extname(item) === '.'+ext ) {
					return item
				}
			});
			callback(null, filtered);
		}
	);
}

/* 
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
	if (err)
	  return callback(err)

	list = list.filter(function (file) {
	  return path.extname(file) === '.' + filterStr
	})

	callback(null, list)
  })
} 
*/