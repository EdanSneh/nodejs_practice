const http = require('http');

function onRequest(request, response){
	console.log("A user made a request" + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"}); /*second param is type of data*/
	response.write("Here is some data");
	response.end();
}

//onRequest function run when user tries to conect
http.createServer(onRequest).listen(8888);
console.log("Server is now running....");