const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// app.use("/api", logger); // app.use() will invoke logger function for any route
// note : order matters

// if path is provided--- middleware function will be called according to give path

// to pass multiple middleware, use array
app.use([logger, authorize]); // these will be execute in order

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(8000, () => {
  console.log("Listening To Port : 8000");
});
