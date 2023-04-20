const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

let students = [
  { id: 1, name: "Marcus", age: 54 },
];

router.get("/students", (req, res) => {
  res.json(JSON.stringify(students));
});

router.post("/student/add", (req, res) => {
  const { id, name, age } = req.body;
  const student = { id, name, age };

  students.push(student);
  res.json(student);
});

router.delete("/student/delete/:id", async (req, res) => {
  const studentId = req.params.id;
  const studentIndex = students.findIndex(student => student.id === studentId);

  if (studentIndex === -1) {
    res.status(404).json({ message: `Estudante com ID ${studentId} não encontrado.` });
  } else {
    students.splice(studentIndex, 1);
    res.json({ message: `Estudante com ID ${studentId} excluído com sucesso!` });
  }s
});

module.exports = router, students;