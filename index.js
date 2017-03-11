function getRepositories() {
    console.log("Getting repos");
    const name = document.getElementById("username").value;
    const req = new XMLHttpRequest();
    req.addEventListener("load", showRepositories);
    req.open("GET", 'https://api.github.com/users/' + name +'/repos?per_page=100');
    req.send();
}

function showRepositories(event, data) {
    console.log("Showing repos");
    const repos = JSON.parse(this.responseText);
    const src = document.getElementById("repository-template").innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(repos);
    document.getElementById("repositories").innerHTML = repoList;
}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});
