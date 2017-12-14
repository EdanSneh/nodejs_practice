var movies = require('./movie2');
// movies.faveMovie = "The Notebook";
// console.log("Bucky's favorite movie is: " + movies.faveMovie);

var buckysMovies = movies();
buckysMovies.faveMovie = "Good Will Hunting";
console.log("Bucky's favorite movie is: " + buckysMovies.faveMovie)