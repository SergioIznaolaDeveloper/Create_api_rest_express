const express = require("express");
const filmTitel = require("../controller/films");
const router = express.Router();

// router.post("/film/", filmTitel.createFilm);
router.get("/film", filmTitel.getFilms);
// router.put("/film/", filmTitel.updateFilm);
// router.delete("/film/", filmTitel.deleteFilm);

module.exports = router;
