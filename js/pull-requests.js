var inputTrue = document.querySelector("#input-Bar");
console.log(inputTrue);
function fetchingData(userName) {
  var ul = document.getElementById("pull-requests-list");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
  }
  fetch(
    "https://api.github.com/repos/codeyourfuture/js-exercises/pulls?state=all"
  )
    .then(function(response) {
      return response.json();
    })
    .then(r => {
      console.log(r);

      r.filter(e => {
        return e.user.login.toLowerCase() == userName.toLowerCase();
      }).forEach(element => {
        console.log(element);
        createMyList(element.title, element.html_url);
      });
    });
}
function createMyList(title, link) {
  var li = document.createElement("li");
  document.getElementById("pull-requests-list").appendChild(li);
  var a = document.createElement("a");
  a.setAttribute("href", link);
  a.appendChild(document.createTextNode(title));
  li.appendChild(a);
}

fetchingData("FlaminiaT");

inputTrue.addEventListener("keyup", function(event) {
  var value = event.target.value;
  console.log(value);
  if (value === "") {
    fetchingData("FlaminiaT");
  } else {
    fetchingData(value);
  }

  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});
