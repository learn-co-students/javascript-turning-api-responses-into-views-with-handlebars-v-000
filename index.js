function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.querySelector('#repository-template').innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.querySelector('#repositories').innerHTML = repoList;
}

document.addEventListener('DOMContentLoaded', function (event) {
  Handlebars.registerPartial('authorPartial', document.querySelector('#author-partial-template').innerHTML);
});
