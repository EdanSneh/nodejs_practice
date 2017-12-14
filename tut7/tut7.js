//core modules
var fs = require('fs'); //file system module
var path = require('path');


fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn.txt").toString());

var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome)); //corrects double slashes to one
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

setInterval(function(){
	console.log("beef");
}, 2000); // runs repeatedly

console.log("interval?");

console.log(__dirname);
console.log(__filename);