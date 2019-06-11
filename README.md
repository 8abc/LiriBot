# Liri Bot
---
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

 - **Built With:** Node.js, Javascript
 - **Packages Used:** require, axios, node-spotify-api, fs, moment, dotenv, request
 - **API:** Spotify, OMDB, Bandsintown

| Commands     | Functions                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| spotify-this | uses the Spotify API by taking the song name from the user and returning the artist, song name, preview link and album. |
movie-this| uses the OMDB API by taking the movie name from the user and returning the title, year, IMDB rating, rotten tomatoes rating, the country it was produced it, lanuguage, plot and actors.
concert-this | uses the Bandsintown API by taking the artist name from user and returning the venue name, location, date and time.
do-what-it-says | uses the built in readFile() method to access data from a .txt file and return its information.

### How it Works ###


1. spotify-this

<img width="851" alt="image1" src="https://user-images.githubusercontent.com/46228172/57966747-fc3cfd00-790a-11e9-82ae-540fd1cba070.png">

2. movie-this

<img width="1413" alt="image2" src="https://user-images.githubusercontent.com/46228172/57966749-ff37ed80-790a-11e9-88f5-a1e92e698754.png">

3. concert-this

<img width="569" alt="Screen Shot 2019-06-10 at 8 36 04 PM" src="https://user-images.githubusercontent.com/46228172/59242682-55721680-8bc1-11e9-9c49-2bb5bff84fec.png">


4. do-what-it-says
<img width="463" alt="image4" src="https://user-images.githubusercontent.com/46228172/57966753-03fca180-790b-11e9-9c78-aa9f360f75a3.png">

5. log.txt 
Bonus: Logs the data from you terminal and outputs the data to .txt file
<img width="815" alt="Screen Shot 2019-06-10 at 8 35 48 PM" src="https://user-images.githubusercontent.com/46228172/59242785-d3362200-8bc1-11e9-891c-25ed24fce8fb.png">
