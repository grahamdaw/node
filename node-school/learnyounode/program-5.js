var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function doneReading(err, dirContent) {

		var filtered = dirContent.filter( function (item) {
			if ( path.extname(item) == '.'+process.argv[3] ) {
				return item;
			}
		});
		for (var i = 0; i < filtered.length; i++) {
			console.log(filtered[i]);
		}
	}
);

/* var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
	if (path.extname(file) === '.' + process.argv[3])
	  console.log(file)
  })
})
 */