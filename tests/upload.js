var weedfs = require('../index.js');

var client = new weedfs({
	server:		"localhost",
	port:		"9333"
});

client.write("./test.jpg", function(finfo) {
	console.log(finfo);
});