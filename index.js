document.addEventListener("DOMContentLoaded", function(event){
  Handlebars.registerPartial("authorPartial", document.getElementById('author-partial-template').innerHTML)
});

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(){
  document.getElementById('repositories').innerHTML = Handlebars.compile(document.getElementById("repository-template").innerHTML)(JSON.parse(this.responseText))
}
