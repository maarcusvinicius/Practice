const students = require('../../routes/student');

document.addEventListener("DOMContentLoaded", () => {
  updateStudents();
});

function updateStudents() {
  fetch("http://localhost:5005/api/students")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let posts = JSON.parse(json);

      let postStudents = "";
      posts.forEach((post) => {
        let postStudent = `
          <div id=${post.id} class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">#${post.id}</h5>
            </div>
            <div class="card-body hstack gap-3">
              <div class="card-text">${post.name}, ${post.age}</div>
              <div class="ms-auto">
                <button class="btn btn-danger" type="button" data-id="${post.id}" onclick="deleteStudent(event)">Excluir</button>
              </div>
            </div>
          </div>
        `;
        postStudents += postStudent;
      });

      document.getElementById("posts").innerHTML = postStudents;
    });
}

// let students = [
//   { id: 1, name: "Marcus", age: 54 },
// ]
let nextId = 1;

function getNextId() {
  let maxId = 0;
  students.forEach(student => {
    if (student.id > maxId) {
      maxId = student.id;
    }
  });
  return maxId + 1;
}

function newStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let id = getNextId()

  let post = { id, name, age };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post)
  };

  fetch("http://localhost:5005/api/student/add", options).then(res => {
    console.log(res);
    updateStudents();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  })

  nextId++;
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
      window.location.reload();
    } else {
      console.error('Erro ao excluir estudante:', res.status);
    }
  })
  .catch(error => {
    console.error('Erro de rede ao excluir estudante:', error);
  });
}