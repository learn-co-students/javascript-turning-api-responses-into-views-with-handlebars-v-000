function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

// The variable names between the double-curly-brace delimiters should match the names of the properties of the context object (in this case, our JSON response).
function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)     //parses this object's .responseText attribute into an object
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)                //templates data

  document.getElementById("repositories").innerHTML = repoList //populates repositories div with templated data
}

document.addEventListener("DOMContentLoaded", function(event) {  //listens for partial registered by handlebars
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});

// function showRepositories(event, data) {
//   const repos = JSON.parse(this.responseText)  //parses this object's .responseText attribute into an object
//   const repoList = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a></li>').join('')}</ul>`//maps responseText to desired format with desired data
//   document.getElementById("repositories").innerHTML = repoList //populates repositories div with mapped data
// }

// function showRepositories(event, data) {
//   const repos = JSON.parse(this.responseText)
//   const repoList = '<ul>' + repos.map(r => {
//    return (`
//           <li>
//             <h2><a href="${r.html_url}">${r.name} </a></h2>
//             <p> Watchers: ${r.watchers_count} </p>
//             <p> Forks: ${r.forks_count} </p>
//             <p> Issues: ${r.open_issues_count} </p>
//           </li>`
//           )
//   }).join('') + "</ul>"
//   document.getElementById("repositories").innerHTML = repoList
// }
