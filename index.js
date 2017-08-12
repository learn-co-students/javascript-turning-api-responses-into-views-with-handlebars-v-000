function getRepositories(){
	const request = new XMLHttpRequest();
	const uri = "https://api.github.com/users/octocat/repos"
	request.addEventListener("load",showRepositories);
	request.open("GET",uri)
	request.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});