const express = require("express");
const router = express.Router();

// let { people } = require("../data");

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// If we look at this it is still somewhat a mess
// we have bunch of functionalities since we have more routes

// and better solution would be if we can separate this(functions)
// in different files.

router.get("/", getPeople);
router.post("/", createPerson);

//we can chain above two
// router.route('/').get(getPeople).post(createPerson)

router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

// we can chain above two aswell
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;
