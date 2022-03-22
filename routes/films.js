const express = require("express");
const filmTitel = require("../controller/films");
const router = express.Router();

// router.post("/film/", filmTitel.createFilm);
router.get("/film/:title?", filmTitel.getFilms);
// router.put("/film/", filmTitel.updateFilm);
router.delete("/film/:title?", filmTitel.deleteFilm);
router.put("/film/:title?", filmTitel.updateFilm);
router.post("/film/:title?", filmTitel.createFilm);

module.exports = router;
