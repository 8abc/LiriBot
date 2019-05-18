console.log("this is loaded");
// to read and set any environment variables with the dotenv package:
require("dotenv").config();
module.exports = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
  password: process.env.OMDB_PASSWORD
};
