app.post("/film/", function (req, res) {
    res.send("[POST]Saludos desde express");
  });
  app.get("/film/:title", function (req, res) {
    res.send("[GET]Saludos desde express");
  });
  app.put("/film/", function (req, res) {
    res.send("[POST]Saludos desde express");
  });
  app.delete("/film/", function (req, res) {
    res.send("[GET]Saludos desde express");
  });
  app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
  });