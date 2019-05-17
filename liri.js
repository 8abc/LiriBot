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
    // console.log(songs);
    // looping through songs and pulling out the attributes we want to display

    //displays the first song in the array
    // console.log(songs[0].artists);
    console.log("artist(s): " + songs[0].artists.map(getArtist));
    console.log("song name: " + songs[0].name);
    console.log("preview song: " + songs[0].preview_url);
    console.log("album: " + songs[0].album.name);
    console.log("------------------------------------");
  });
};
// getConcert function will show what the concert does

get;

//create user commands
var userCommands = function(caseData, functionData) {
  switch (caseData) {
    case "spotify-this-song":
      getSpotify(functionData);
      break;
    case "concert-this":
      console.log("concert-this");
    case "movie-this":
      console.log("concert-this");
    case "do-what-it-says":
      console.log("do-what-it-says");
    default:
      console.log("LIRI doesn't know that");
  }
};
//get user commands from the terminal
userCommands(process.argv[2], data);
