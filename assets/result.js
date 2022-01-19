const params = new URLSearchParams(window.location.search);
document.getElementById("score").innerHTML = params.get("score");

let form = document.getElementById("form");
let userData = [];
form.onsubmit = (e) => {
  e.preventDefault();
  let localStorageData = localStorage.getItem("userData");
  if (localStorageData && localStorageData.length) {
    userData.push(...JSON.parse(localStorageData));
  }
  let name = document.getElementsByClassName("card__text_input")[0].value;
  let score = document.getElementById("score").innerHTML;
  userData.push({ name: name, score: score });
  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "highscores.html";
};
