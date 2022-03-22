const env = require("dotenv").config();
const apiKey = process.env.API_KEY;
const fetch = require("axios");
var express = require('express')
const app = express();
const http = require("http"); // importando modulo npm (librería)
const bodyParser = require("body-parser");
const request = require("request");

const port = 3000; /*especificar el puerto*/
app.use(express.json());

const getfetchDefault = async (req, res) => {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`
    ); //{}
    let object = await response.data
    // console.log(object);
    // console.log(typeof(object))
    return object
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getfetchByTitle = async (req, res) => {
    try {
    let title = req.params.title
      let response = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`
      ); //{}
      let object = await response.data
      // console.log(object);
      // console.log(typeof(object))
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
