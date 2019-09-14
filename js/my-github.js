// Write code here to communicate with Github

function fetchingData() {
  fetch("https://api.github.com/users/Flaminiat/repos")
    .then(function(response) {
      return response.json();
    })
    .then(r => {
      var ult = document.getElementById("repos-list");
      r.forEach(element => {
        createMyList(element.name, element.html_url);
      });
    });
}
function createMyList(name, link) {
  var li = document.createElement("li");
  document.getElementById("repos-list").appendChild(li);
  var a = document.createElement("a");
  a.setAttribute("href", link);
  a.appendChild(document.createTextNode(name));
  li.appendChild(a);
}

fetchingData();

function fetchingDataCount() {
  fetch("https://api.github.com/users/Flaminiat/repos")
    .then(function(response) {
      return response.json();
    })
    .then(countObj => {
      document.getElementById("repos-count").innerHTML = countObj.length;
    });
}
fetchingDataCount();

function fetchingDataOtherUser() {
  var inputStr = document.querySelector("#input-Bar-repo").value;
  fetch("https://api.github.com/users/" + inputStr + "/repos")
    .then(function(response) {
      return response.json();
    })
    .then(r => {
      var ul = document.getElementById("repos-list-otherUsers");
      while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
      }
      r.forEach(element => {
        createMyList(element.name, element.html_url);
      });
    });
}
function createMyList(name, link) {
  var li = document.createElement("li");
  document.getElementById("repos-list-otherUsers").appendChild(li);
  var a = document.createElement("a");
  a.setAttribute("href", link);
  a.appendChild(document.createTextNode(name));
  li.appendChild(a);
}

document.querySelector("#searchItBtn").addEventListener("click", searchBtn);

function searchBtn() {
  var inputStr = document.querySelector("#input-Bar-repo").value;
  if (inputStr != "") {
    fetchingDataOtherUser(inputStr);
  } else {
    fetchingDataOtherUser("FlaminiaT");
  }
}
document.querySelector("#searchItBtn").addEventListener("click", searchBtn);
