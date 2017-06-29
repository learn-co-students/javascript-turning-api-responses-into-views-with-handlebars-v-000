function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}


function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  onst template = Handlebars.compile(src)
  const repoList = template(repos)
  const repoList = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">'  + r.name + '</li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
