const fetch = require("../utiles/fetch.js");
var express = require('express')
var app = express()


const getDefaultFilm = async (req, res) => {
  try {
    const fetchRes = await fetch.getfetchDefault(req, res);
    return fetchRes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getFilm = async (req, res) => {
  try {
    const fetchTitle = await fetch.getfetchByTitle(req, res);
    return fetchTitle;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const entries = {
  getDefaultFilm,
  getFilm
};

module.exports = entries;
