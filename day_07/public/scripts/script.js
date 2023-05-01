document.addEventListener("DOMContentLoaded", () => {
  updateStudents();
});

let nextId = 1;

function updateStudents() {
  fetch("http://localhost:5005/api/students")
    .then((res) => res.json())
    .then((json) => {
      let postStudents = "";

      let students = JSON.parse(json);
      students.forEach((student) => {
        let postStudent = `
          <div id=${student.id} class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">#${student.id}</h5>
            </div>
            <div class="card-body hstack gap-3">
              <div class="card-text">${student.name}, ${student.age}</div>
              <div class="ms-auto">
                <button class="btn btn-danger" type="button" data-id="${student.id}" onclick="deleteStudent(event)">Excluir</button>
              </div>
            </div>
          </div>
        `;
        postStudents += postStudent;
      });

      document.getElementById("posts").innerHTML = postStudents;
      getNextId(students);
    })
}

function getNextId(students) {
  let maxId = 0;
  students.forEach((student) => {
    if (student.id > maxId) {
      maxId = student.id;
    }
  });
  nextId = maxId + 1;
}

function newStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, age })
  };

  fetch("http://localhost:5005/api/student/add", options)
    .then(res => {
      if (res.ok) {
        updateStudents();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
      } else {
        console.error('Erro ao adicionar estudante:', res.status);
      }
    })
    .catch(error => {
      console.error('Erro de rede ao adicionar estudante:', error);
    });
}

function deleteStudent(event) {
  const studentId = event.target.dataset.id;
  // console.log(studentId);

  fetch(`http://localhost:5005/api/student/delete/${studentId}`, {
    method: 'DELETE'
  })
  .then(res => {
    if (res.ok) {
      alert('Estudante excluído com sucesso!');
      updateStudents();
    } else {
      console.error('Erro ao excluir estudante:', res.status);
    }
  })
  .catch(error => {
    console.error('Erro de rede ao excluir estudante:', error);
  });
}