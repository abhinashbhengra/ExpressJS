const express = require("express");
const app = express();

// let { people } = require("./data");

const people = require("./routes/people");
const auth = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.use("/api/people", people);

app.use("/auth", auth);

app.listen(8000, () => {
  console.log("Listening To Port : 8000");
});
