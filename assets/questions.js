const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let idx = 0;
let score = 90;
var timer = document.getElementById("time");
let timerInterval;

function handleClick(choice) {
  const userChoice = questions[idx].options[choice];

  if (userChoice === questions[idx].answer) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }
}

function moveToNextQuestion() {
  if (idx < questions.length - 1) {
    idx += 1;
    startQuiz();
  } else {
    window.location.href = `result.html?score=${score}`;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleCorrectAnswer() {
  document.getElementById("result").innerHTML = "Correct!";
  await sleep(500);
  moveToNextQuestion();
}

function handleWrongAnswer() {
  if (score > 10) {
    score -= 10;
    timer.innerHTML = `Time left: ${score}`;
    document.getElementById("result").innerHTML = "Wrong!";
  } else {
    score = 0;
    timer.innerHTML = `Time left: ${score}`;
    clearInterval(timerInterval);
    window.location.href = `result.html?score=${score}`;
  }
}

function startQuiz() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("question").innerHTML = questions[idx].questionText;
  document.getElementById("opt-1").innerHTML = questions[idx].options[0];
  document.getElementById("opt-2").innerHTML = questions[idx].options[1];
  document.getElementById("opt-3").innerHTML = questions[idx].options[2];
  document.getElementById("opt-4").innerHTML = questions[idx].options[3];
}

function startTimer() {
  timerInterval = setInterval(() => {
    score -= 1;
    if (score === 0) {
      timer.innerHTML = `Time out`;
      clearInterval(timerInterval);
      window.location.href = `result.html?score=${score}`;
    }
    if (score > -1) {
      timer.innerHTML = `Time left: ${score}`;
    }
  }, 1000);
}

startTimer();
timer.innerHTML = `Time left: ${score}`;
startQuiz();
