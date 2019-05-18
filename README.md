#Liri Bot

 - **Built With:** Node.js, Javascript
 - **Packages Used:** require, axios, node-spotify-api, fs, moment, dotenv, request
 - **API:** Spotify, OMDB, Bandsintown

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

| Commands     | Functions                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| spotify-this | uses the Spotify API by taking the song name from the user and returning the artist, song name, preview link and album. |
movie-this| uses the OMDB API by taking the movie name from the user and returning the title, year, IMDB rating, rotten tomatoes rating, the country it was produced it, lanuguage, plot and actors.
concert-this | uses the Bandsintown API by taking the artist name from user and returning the venue name, location, date and time.
do-what-it-says | uses the built in readFile() method to access data from a .txt file and return its information.

