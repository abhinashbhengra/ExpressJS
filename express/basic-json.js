const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(404).send("page not found!!!");
});

app.listen(8000, () => {
  console.log("Listening To Port : 8000");
});
