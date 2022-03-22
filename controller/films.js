const db = require("../models/films.js");

const getFilms = async (req, res) => {
    if (req.params.title){
        const entries2 = await db.getFilm(req, res);
        res.status(200).json(entries2);
    } else {
    const entries = await db.getDefaultFilm(req, res);
    res.status(200).json(entries);
    }
};

const filmTitel = {
  getFilms,
//   deleteFilm,
//   updateFilm,
//   createFilm,
};
module.exports = filmTitel;