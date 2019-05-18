// require data from File System package
var fs = require("fs");
// to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");
// requiring spotify module
var Spotify = require("node-spotify-api");
// Here we incorporate the "axios" npm package
var axios = require("axios");
//grabbed all the info after the function call and put it into 1 string
var data = process.argv.slice(3).join(" ");
// require request
var request = require("request");
// spotify keys
var spotify = new Spotify({
  id: keys.id,
  secret: keys.secret
});
var getArtist = function(artist) {
  return artist.name;
};
// create a function to getSpotify passing in songName as the arguement
var getSpotify = function(songName) {
  // query will grab whats in songName to search
  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    var songs = data.tracks.items;
    // looping through songs and pulling out the attributes we want to display
    console.log("------------------------------------");
    // The artist name
    console.log("Artist: " + songs[0].artists.map(getArtist));
    // The song name
    console.log("Song name: " + songs[0].name);
    // preview link from spotify
    console.log("Preview song: " + songs[0].preview_url);
    // The album the songs from
    console.log("Album: " + songs[0].album.name);
    console.log("------------------------------------");
  });
};

// getMovie function will show what the movie does
function getMovie(movieName) {
  // Then run a request with axios to the OMDB API with the movie specified
  axios
    .get(
      "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      console.log("------------------------------------");
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB rating is: " + response.data.imdbRating);
      console.log("Rotten Tomatoes rating is: " + response.data.tomatoRating);
      console.log("Produced in: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("------------------------------------");
    })
    .catch(function(error) {
      console.log(error);
    });
}
// getConcert function will show what the concert does
function getConcert(artist) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("------------------------------------");
      console.log("Venue: " + response.data.venue.name);
      console.log("Location: " + response.data.venue.country);
      //using moment to format date (mm/dd/yyyy)
      let concertDate = moment(response.data.datetime).format("MM/DD/YYYY");
      console.log("Date and Time:" + response.data.eventData.datetime);
      console.log("------------------------------------");
    })
    .catch(function(error) {
      console.log(error);
    });
}
//
function doWhatitsays() {
  // This block of code will read from the "random.txt" file.
  //"utf8" parameter so the code doesn't provide stream data
  // The code will store the contents of the reading inside the variable "data"
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) throw error;
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    // // We will then re-display the content as an array for later use.
    // console.log(dataArr);
    return console.log(data);
  });
}

//User commands
var userCommands = function(caseData, functionData) {
  switch (caseData) {
    case "spotify-this-song":
      // runsspotify function
      getSpotify(functionData);
      break;
    case "movie-this":
      // runs movie function
      getMovie(functionData);
    case "concert-this":
      // runs concert function
      getConcert(functionData);
    case "do-what-it-says":
      // runs fs function
      doWhatitsays();
      break;
    default:
      console.log("LIRI doesn't know that");
  }
};
//get user commands from the terminal
userCommands(process.argv[2], data);
