const env = require("dotenv").config();
const apiKey = process.env.API_KEY;
const fetch = require("axios");

const getfetchDefault = async (req, res) => {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`
    ); 
    let object = await response.data
    return object
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getfetchByTitle = async (req, res) => {
    try {
    let title = req.params.title
    console.log(`esto es ${title}`)  
    let response = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`
      ); 
      let object = await response.data
      return object
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  
const fe = {
  getfetchDefault,
  getfetchByTitle
};

module.exports = fe;
