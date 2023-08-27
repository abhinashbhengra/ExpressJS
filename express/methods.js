const express = require("express");
const app = express();

let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "please provide name" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Provide credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((p) => p.id === +id);

  if (!person) {
    res.status(404).send({ success: false, message: "person not found!!" });
  }
  const newPeople = [...people].map((person) => {
    if (person.id === +id) {
      person.name = name;
    }
    return person;
  });
  res.status(200).send({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === +id);
  if (!person) {
    res
      .status(404)
      .send({ success: false, message: `person not found with id:${id}` });
  }
  people = people.filter((person) => person.id !== +id);
  res.status(200).send({ success: true, data: people });
});

app.listen(8000, () => {
  console.log("Listening To Port : 8000");
});
