const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
// static --- a file that server does have to change it
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("page not found!!!");
});

app.listen(8000, () => {
  console.log("listening to port : 8000");
});
