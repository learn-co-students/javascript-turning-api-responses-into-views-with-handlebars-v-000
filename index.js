function getRepositories() {//initialising new XMLHttpRequest and making GET request
  const req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories)//definig callback func to handle response
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)//parse response string into proper obj
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById('repositories').innerHTML = repoList
}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});
