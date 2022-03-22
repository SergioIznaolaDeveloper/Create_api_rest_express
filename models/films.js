const fetch = require("fetch");
const env = require("dotenv").config();
const apiKey = process.env.API_KEY;

const getDefaultFilm = async () => {
  try {
    console.log("hola")
  } catch (err) {
    console.log(err);
    throw err;
  }
};


const entries = {
  getDefaultFilm,
};

module.exports = entries;
