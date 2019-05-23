// require data from File System package
var fs = require("fs");
// to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");
// requiring spotify module
var Spotify = require("node-spotify-api");
// Here we incorporate the "axios" npm package
var axios = require("axios");
// require moment to format date
var moment = require("moment");
//grabbed all the info after the function call and put it into 1 string
var data = process.argv.slice(3).join(" ");
// require request
var request = require("request");
// spotify keys
var spotify = new Spotify({
  id: keys.id,
  secret: keys.secret
});
// ======== spotify-this-song ========
// create a function to getSpotify passing in songName as the arguement
var getSpotify = function(songName) {
  //default will search "The Sign"
  if (!songName) {
    songName = "The Sign";
  }
  // query will grab whats in songName to search
  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    var songs = data.tracks.items;
    // looping through songs and pulling out the attributes we want to display
    console.log("------------------------------------");
    // The artist name
    console.log("Artist: " + songs[0].artists[0].name);
    // The song name
    console.log("Song name: " + songs[0].name);
    // preview link from spotify
    console.log("Preview song: " + songs[0].preview_url);
    // The album the songs from
    console.log("Album: " + songs[0].album.name);
    console.log("------------------------------------");
    // append text into log.txt file
    var logSpotify =
      "--- Spotify ---" + "\nArtist: " + songs[0].artists[0].name;
    //use file system to log if there's an error
    fs.appendFile("log.txt", logSpotify, function(err) {
      if (err) throw err;
    });
  });
};
// ======== movie-this ========
// getMovie function will show what the movie does
function getMovie(movieName) {
  if (!movieName) {
    movieName = "Mr.Nobody";
  }
  // Then run a request with axios to the OMDB API with the movie specified
  axios
    .get(
      "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      var movieData = response.data;
      console.log("------------------------------------");
      console.log("Title: " + movieData.Title);
      console.log("Year: " + movieData.Year);
      console.log("IMDB rating is: " + response.data.imdbRating);
      console.log("Rotten Tomatoes rating is: " + movieData.tomatoRating);
      console.log("Produced in: " + movieData.Country);
      console.log("Language: " + movieData.Language);
      console.log("Plot: " + movieData.Plot);
      console.log("Actors: " + movieData.Actors);
      console.log("------------------------------------");
    })
    .catch(function(error) {
      console.log(error);
      // append text into log.txt
      var logOmdb = "--- OMDB ---" + "Title: " + response.data.Title;
      //use file system to log if there's an error
      fs.appendFile("log.txt", logOmdb, function(err) {
        if (err) throw err;
      });
    });
}
// ======= concert-this =======
// getConcert function will show what the concert does
function getConcert(artist) {
  var artisit = userCommands;
  var URL =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  axios
    .get(URL)
    .then(function(response) {
      //add response to a variable = response.data[0]
      var concertData = response.data[0];
      if (!concertData) {
        return console.log("This artist doesn't have any concerts");
      }
      // console.log(concertData);
      console.log("------------------------------------");
      console.log("Venue: " + concertData.venue.name);
      console.log("Location: " + concertData.venue.city);
      //using moment to format date (mm/dd/yyyy)
      console.log("Date: " + moment(concertData.datetime).format("l"));
      console.log("------------------------------------");
      // append text into log.txt
      var logBandsintown =
        "--- BANDSINTOWN ---" + "Name: " + artist + concertData.venue.name;

      fs.appendFile("log.txt", logBandsintown, function(err) {
        if (err) throw err;
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}
// ======= do-what-it-says ======
function doWhatitsays() {
  // This block of code will read from the "random.txt" file.
  //"utf8" parameter so the code doesn't provide stream data
  // The code will store the contents of the reading inside the variable "data"
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) throw error;
    // Then split it by commas (to make it more readable)
    var random = data.split(",");
    // // We will then re-display the content as an array for later use.
    // console.log(dataArr);
    // return console.log(data);
    userCommands(random[0], random[1]);
  });
}

// ======== user commands =======
var userCommands = function(caseData, functionData) {
  switch (caseData) {
    case "spotify-this-song":
      // runsspotify function
      getSpotify(functionData);
      break;
    case "movie-this":
      // runs movie function
      getMovie(functionData);
      break;
    case "concert-this":
      // runs concert function
      getConcert(functionData);
      break;
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
