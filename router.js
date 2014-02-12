var toUpperHandler = require("./request-handlers/toUpper");

function route(pathname) {
	var handler;
	console.log("Routing request for path " + pathname + " (treated as " + pathname.toLowerCase() + ")");
	switch(pathname.toLowerCase()) {
		case "/toupper": handler = toUpperHandler.handle; break;
	}
	return handler;
}

exports.route = route;