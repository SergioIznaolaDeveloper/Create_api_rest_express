const db = require("../models/films.js");

const getFilms = async (req, res) => {
  // /entries?email=alejandru@thebridgeschool.es
    const entries = await db.getDefaultFilm();
    res.status(200).json(entries); // Pinta datos en el pug

};

const filmTitel = {
  getFilms,
//   deleteFilm,
//   updateFilm,
//   createFilm,
};
module.exports = filmTitel;