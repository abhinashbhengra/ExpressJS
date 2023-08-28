let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "please provide name" });
  }
  res.status(201).send({ success: true, person: name });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === +id);
  if (!person) {
    res
      .status(404)
      .send({ success: false, message: `person not found with id:${id}` });
  }
  people = people.filter((person) => person.id !== +id);
  res.status(200).send({ success: true, data: people });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
