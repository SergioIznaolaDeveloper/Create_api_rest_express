const express = require("express");
const app = express();
const port = 3000
const filmRouter = require('./routes/films');

app.use(express.json());
app.use("/api",filmRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})