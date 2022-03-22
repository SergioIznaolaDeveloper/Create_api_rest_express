const db = require("../models/films.js");

const getFilms = async (req, res) => {
  if (req.params.title) {
    const entries2 = await db.getFilm(req, res);
    res.status(200).json(entries2);
  } else {
    const entries = await db.getDefaultFilm(req, res);
    res.status(200).json(entries);
  }
};
const deleteFilm = async (req, res) => {
  console.log(req.params.title);
  if (req.params.title) {
    const entries2 = await db.getFilm(req, res);
    res
      .status(200)
      .json({ Mensaje: `Se ha borrado la pelicula ${req.params.title}` });
  }
};

const updateFilm = async (req, res) => {
  console.log(req.params.title);
  if (req.params.title) {
    const entries2 = await db.getFilm(req, res);
    res
      .status(200)
      .json({ Mensaje: `Se ha actualizado la pelicula ${req.params.title}` });
  }
};
const createFilm = async (req, res) => {
  console.log(req.params.title);
  if (req.params.title) {
    const entries2 = await db.getFilm(req, res);
    res
      .status(200)
      .json({ Mensaje: `Se ha creado la pelicula ${req.params.title}` });
  }
};
const filmTitel = {
  getFilms,
  deleteFilm,
  updateFilm,
  createFilm,
};
module.exports = filmTitel;
