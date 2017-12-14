const connect = require('connect');
const http = require('http');

var app = connect();

// function doFirst(request, response, next){
// 	console.log("Bacon");
// 	//next();
// }

// function doSecond(request, response, next){
// 	console.log("Tuna");
// 	next();
// }

// app.use(doFirst);
// app.use(doSecond);

function profile(request, response){
	console.log("User requested profile");
}

function forum(request, response){
	console.log("User requested forum");
}


app.use('/profile', profile);
app.use('/profile', forum);


http.createServer(app).listen(8888);
console.log("server is running.....")