const express = require("express");
const app = express();

let { people } = require("./data");

app.get("/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(8000, () => {
  console.log("Listening To Port : 8000");
});
