var qs = require("querystring");
var url = require("url");

function handleRequest(request, response) {
	var myUrl = url.parse(request.url);
	
	var textInUppercase = qs.parse(myUrl.query).v.toUpperCase();
	response.write("The result is: " + textInUppercase);
}

exports.handle = handleRequest;