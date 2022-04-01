const resultsTextarea = document.getElementById("ta");

function getAllPosts() {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      resultsTextarea.value = JSON.stringify(json);
    });
}

function getPost10() {
  fetch("http://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((json) => {
      resultsTextarea.value = JSON.stringify(json);
    });
}

function createPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "deez",
      body: "Assignments",
      userId: 69,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response => response.json())
    .then(json => {
        resultsTextarea.value = json.id;
    });
}

function replace() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "put",
      body: JSON.stringify({
        title: "deez",
        body: "Assignments",
        userId: 12,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(json => {
          resultsTextarea.value = JSON.stringify(json);
      });
  }

function update() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "PATCH",
      body: JSON.stringify({
        title: "KNUTZ",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(json => {
          resultsTextarea.value = JSON.stringify(json);
      });
}

function del() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(json => {
          resultsTextarea.value = JSON.stringify(json) + '*Strongbad Voice* "DELETED"';
      });
}