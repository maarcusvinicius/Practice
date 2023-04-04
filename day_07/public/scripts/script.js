
document.addEventListener("DOMContentLoaded", () => {
  updateStudents();
});

function updateStudents() {
  fetch("http://localhost:5005/api/students")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json)

      let postStudents = "";

      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postStudent = `
          <div id=${post.id} class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">#${post.id}</h5>
            </div>
            <div class="card-body">
              <div class="card-text">${post.name}, ${post.age}</div>
            </div>
          </div>
        `;
        postStudents += postStudent;
      });

      document.getElementById("posts").innerHTML = postStudents;
    });
}

function newStudent() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  let post = { id, name, age };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post)
  };

  fetch("http://localhost:5005/api/student/add", options).then(res => {
    console.log(res);
    updateStudents();

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  });
}

function deleteStudent() {
  // let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
}
