function getRepositories(){
  const req = new XMLHttpRequest();
  const url = 'https://api.github.com/users/smithwebtek/repos';
  req.addEventListener("load", showRepositories);
  req.open("GET", url);
  req.send();
  return false;
}

//  version 1, before adding watchers_count, open_issues_count and forks_count
// function showRepositories(){
//   const repos = JSON.parse(this.responseText);
//   debugger;
// // short way:
//   const repoList = `<ul>${repos.map(r =>'<li><a href="'+ r.html_url + '">' + r.name + '</a></li>').join('')}</ul>`;
// // long way:
//   // var repoList = "<ul>";
//   // for (var i =0; i < repos.length; i++) {
//   //   repoList += "<li>" + repos[i].name + "</li>";
//   // }
//   // repoList += "</ul>";
//   document.getElementById("repositories").innerHTML = repoList;
// }

//  version 2, includes watchers_count, open_issues_count and forks_count
// function showRepositories(){
//   const repos = JSON.parse(this.responseText);
//   const repoList = `<ul>${repos.map(r =>
//     '<h3><a href="'+ r.html_url + '">' + r.name + '</a></h3>'+
//     '<p>Watchers: ' + r.watchers_count + '</p>'+
//     '<p>Forks: ' + r.forks_count + '</p>' +
//     '<p>Issues: ' + r.open_issues_count + '</p>'
//     ).join('')}</ul>`;
//   document.getElementById("repositories").innerHTML = repoList;
// }

// version 3: using handlebars template
function showRepositories(){
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('repository-template').innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById("repositories").innerHTML = repoList;
}

// version 4: using partial for author avatar, etc.
function showRepositories(){
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('repository-template').innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById("repositories").innerHTML = repoList;

}

document.addEventListener("DOMContentLoaded", function(event){
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML);
});










