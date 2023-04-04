const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

let students = [
  { id: "0", name: "Jose", age: "54" },
  { id: "1", name: "Maria", age: "9" },
  { id: "2", name: "Joao", age: "3" },
  { id: "3", name: "Marcus", age: "19" },
];

router.get("/students", (req, res) => {
  res.json(JSON.stringify(students));
});

router.get("/student/:id", (req, res) => {
  console.log(req.params.id);

  let student = students[req.params.id];
  if (student) {
    res.json(student);

    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
  } else {
    res.send("Aluno não encontrado!");
  }
});

router.post("/student/add", (req, res) => {
  const { id, name, age } = req.body;
  const student = { id, name, age };

  students.push(student);
  res.json(student);

  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
});

router.put("/student/atl/:id", (req, res) => {
  const id = req.params.id;
  const novoNome = req.body.name;

  const index = students.findIndex((p) => p.id === id);

  if (index >= 0) {
    students[index].name = novoNome;
    res.status(200).send("Nome da pessoa atualizado com sucesso");
  } else {
    res.status(404).send("Pessoa não encontrada");
  }
});

router.delete("/student/delete", (req, res) => {
  let student = students.splice(req.body.id);
  res.json(student);

  let id = req.body.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
});

module.exports = router;
