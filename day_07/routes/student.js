const express = require("express");
const router = express.Router();
const students = [];

router.get("/students", (req, res) => {
  // res.json(students);
  res.json(JSON.stringify(students));
  console.log(students);
});

router.post("/student/add", (req, res) => {
  const { name, age } = req.body;
  const student = { id: getNextId(), name, age };

  students.push(student);

  res.status(201).json({ message: 'Estudante adicionado com sucesso', student });
});

router.delete("/student/delete/:id", (req, res) => {
  const studentId = req.params.id;
  const index = students.findIndex((student) => student.id === Number(studentId));

  if (index === -1) {
    res.status(404).json({ message: "Estudante não encontrado" });
  } else {
    students.splice(index, 1);
    res.json({ message: "Estudante excluído com sucesso!" });
  }
});

function getNextId() {
  let maxId = 0;
  if (students.length > 0) {
    students.forEach((student) => {
      if (student.id > maxId) {
        maxId = student.id;
      }
    });
  }
  return maxId + 1;
}

module.exports = router;