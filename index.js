const express = require("express");
const env = require("dotenv").config();
const app = express();
const fetch = require("axios");
const filmRouter = require('./routes/films');
const port = process.env.PORT;
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use("/api",filmRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})