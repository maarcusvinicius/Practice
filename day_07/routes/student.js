const express = require("express");
const router = express.Router();
const students = [];

router.get("/students", (req, res) => {
  res.json(students);
  console.log(students);
});

router.post("/student/add", (req, res) => {
  const { name, age } = req.body;
  const id = getNextId();

  students.push({ id, name, age });

  res.json({ message: "Estudante adicionado com sucesso!" });
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
  students.forEach((student) => {
    if (student.id > maxId) {
      maxId = student.id;
    }
  });
  return maxId + 1;
}

module.exports = router;