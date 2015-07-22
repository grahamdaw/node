var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, fileContent) {
		var lines = fileContent.toString();
		console.log(lines.split('\n').length - 1);
	}
);
