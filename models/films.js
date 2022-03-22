const fetch = require("fetch");
const env = require("dotenv").config();
const apiKey = process.env.API_KEY;

const getDefaultFilm = async () => {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`
    ); //{}
    let title = await response.json(); //{}
    console.log(title);
    return title;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// app.get("/films/:title?", async (req, res) => {
//   let defaultFilm = req.params.title || "Sergio";
//   try {
//     let response = await fetch(
//       `https://www.omdbapi.com/?t=${defaultFilm}&apikey=${apiKey}`
//     ); //{}
//     let title = await response.json(); //{}
//     res.render("films", { films: title }); // Pinta datos en el pug
//   } catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//   }
// });
// /* recoger datos de input y redirección*/
// app.post("/", function (req, res) {
//   let film = req.body.films;
//   console.log(film);
//   res.redirect(`http://localhost:3000/films/${film}`);
// });

const entries = {
  getDefaultFilm,
};

module.exports = entries;
