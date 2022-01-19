let userData = JSON.parse(localStorage.getItem("userData"));
let highScoreList = "<ol>";

if (userData && userData.length) {
  userData.sort((a, b) => {
    return parseInt(b.score) - parseInt(a.score);
  });
  for (const user of userData) {
    highScoreList += `<li>${user.name} - ${user.score}</li>`;
  }
}
highScoreList += "</ol>";
document.getElementById("highscores").innerHTML = highScoreList;

const clearHighScores = () => {
  localStorage.clear();
  window.location.href = "index.html";
};
