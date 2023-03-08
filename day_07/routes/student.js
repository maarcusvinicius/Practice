const express = require("express");
const router = express.Router();

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
  } else {
    res.send("Aluno não encontrado!")
  }
});

router.post("/student/add", (req, res) => {
  // console.log(req.body);

  let student = students.push(req.body);
  res.json(student);
});

// router.put("/student/atl/:id", (req, res) => {
//   // console.log(req.params.id)

//   // let student = students.indexOf(req.body.id); 
//   let student = students.map(() => {( req.body.name )})
//   res.json(student);

//   // if (student !== -1) {
//   //   students[student] = (req.body.name)
//   //   res.json(student)
//   // } else {
//   //   res.send("Algo deu errado")
//   // }
// })

router.delete("/student/delete", (req, res) => {
  console.log(req.body.id);

  let student = students.splice(req.body.id);
  res.json(student);
});

module.exports = router;
