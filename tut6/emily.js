var movies = require('./movie2');
// movies.faveMovie = "The Notebook";
// console.log("Emily's favorite movie is: " + movies.faveMovie);

var emilysMovies = movies();
emilysMovies.faveMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilysMovies.faveMovie)