// implement the fn that will fire when <a> is clicked
function getRepositories() {
  // initializing a new XMLHttpRequest() and making a GET request to the URI for the list user repositories API
  const req = new XMLHttpRequest()
  // defining a callback fn to handle the response
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

// not using Handlebars
// function showRepositories(event, data) {
//   // parsing the response string into a proper object
//   const repos = JSON.parse(this.responseText)
//   // map-ing through each obj in repos and creating a </li> node for each item
//   const repoList = '<ul>' + repos.map(r => {
//    return (`
//           <li>
//             <h2><a href="${r.html_url}">${r.name}</a></h2>
//             <p>Watchers: ${r.watchers_count}</p>
//             <p>Forks: ${r.forks_count}</p>
//             <p>Issues: ${r.open_issues_count}</p>
//           </li>`
//           )
//   }).join('') + "</ul>"
//
//   document.getElementById('repositories').innerHTML = repoList
// }

// using Handlebars
function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById('repository-template').innerHTML
  const template = Handlebars.compile(src)
  // we get the innerHTML of our template script tag to compile into a template fn that we pass our JSON response into
  const repoList = template(repos)

  document.getElementById('repositories').innerHTML = repoList
}


// using and registering partial
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});
