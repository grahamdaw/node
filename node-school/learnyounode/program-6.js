var mymodule = require('./mymodule-6.js');

mymodule(process.argv[2], process.argv[3], function ( err, filteredContent ) {
		if (err) {
			console.log('ERROR : ' + err);
		}
		filteredContent.forEach( function (item) {
			console.log(item);
		});
	}
);

/* 
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
	return console.error('There was an error:', err)

  list.forEach(function (file) {
	console.log(file)
  })
})
 */