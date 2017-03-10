document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML); 
}); 

function getRepositories() {
  var req = new XMLHttpRequest(); 
  req.addEventListener("load", showRepositories); 
  req.open("GET", 'https://api.github.com/users/octocat/repos'); 
  req.send; 
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText); 
  var src = document.getElementById("repository-template").innerHTML; 
  var template = Handlebars.compile(src); 
  var repoList = template(repos); 

  document.getElementById("repositories").innerHTML = repoList; 
}
