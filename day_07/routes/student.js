const express = require("express");
const router = express.Router();

let students = [
  { id: 0, name: "Jose", age: 54 },
  { id: 1, name: "Maria", age: 9 },
  { id: 2, name: "Joao", age: 3 },
  { id: 3, name: "Marcus", age: 19 },
];

router.get("/students", (req, res) => {
  res.json(JSON.stringify(students));
});

router.post("/students", (req, res) => {
  let student = students.push({ id: 6, name: "Isabelle", age: 11 });
  res.json(student);
})

router.get("/student", (req, res) => {
  console.log(req.body);
  let student = students[req.body.id];
  res.json(student);
});

router.get("/student/:id", (req, res) => {
  console.log(req.params.id);
  let student = students[req.params.id];
  res.json(student);
});

module.exports = router;
