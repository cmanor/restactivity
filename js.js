const responseTextArea = document.getElementById("response").innerHTML;
const resultsTextarea = document.getElementById("results").innerHTML;


function getAllPosts() {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            resultsTextarea.value = JSON.stringify(json, null, "  ");
    });
}

function getPost10() {
    fetch("http://jsonplaceholder.typicode.com/posts/10")
        .then(response => response.json())
        .then(json => {
            resultsTextarea.value = JSON.stringify(json, null, "  ");
    });
}

function createPost() {
    fetch("https://jasonplaceholder.typicode.com/posts",{
            method: 'POST',
            body: JSON.stringify({
                title: 'Test Title',
                body: 'Test body.',
                userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(response => response.json())
        .then(json => {
            responseTextarea.value = "ID: " + json.id}
        );
}