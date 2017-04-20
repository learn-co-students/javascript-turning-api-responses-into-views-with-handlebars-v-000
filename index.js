Handlebars.registerPartial('authorPartial', document.getElementById('auhtor-partial-template').innerHTML)

function getRepositories(){
  var req = new XMLHttpRequest
  req.addEventListener("load", showRepositories)
  req.open("GET", "https://api.github.com/users/octocat/repos")
  req.send()
}

function showRepositories(){
  var repos = JSON.parse(this.responseText)
  var scr = document.getElementById("repository-template").innerHTML
  var template = Handlebars.compile(scr)
  var repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}
