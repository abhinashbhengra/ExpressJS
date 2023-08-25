const express = require("express");
const app = express(); //envoke the method

app.get("/", (req, res) => {
  res.status(200).send("Namaste Dev");
});

app.get("/about", (req, res) => {
  res.status(200).send("Frontend Dev learning backend");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found!!</h1>");
});

app.listen(8000, () => {
  console.log("listening port : 8000");
});

// app.get
// app.post
// app.put
// app.get
// app.delete
// app.all
// app.use --- reponsible for middleware
// app.listen
