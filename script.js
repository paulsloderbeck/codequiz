let questionInput = document.querySelector("#questionText");
let answerAInput = document.querySelector("#answerAText");
let answerBInput = document.querySelector("#answerBText");
let answerCInput = document.querySelector("#answerCText");
let answerDInput = document.querySelector("#answerDText");
let timeEl = document.querySelector("#timer");
let qIndex = 0;
let secondsLeft = 60;
let userScore = 0;
let userChoice = "";
let correctAnswer = "";

const questions = [
  {
    question: "Arrays in javascript can be used for___",
    answerA: "A: storing values across a numbered index",
    answerB: "B: storing multiple values in a single variable",
    answerC: "C: storing an ordered list of data",
    answerD: "D: all of the above",
    correctAnswer: "D",
  },
  {
    question: "A function is executed when something _____ it",
    answerA: "A: activates",
    answerB: "B:invokes",
    answerC: "C: actualizes",
    answerD: "D:begins",
    correctAnswer: "B",
  },
  {
    question:
      "The setInterval method calls a function or evaluates an expression at specified intervals in _______",
    answerA: "A: seconds",
    answerB: "B:nanoseconds",
    answerC: "C: minutes",
    answerD: "D: milliseconds",
    correctAnswer: "D",
  },
  {
    question: "The DOM stands for _____",
    answerA: "A: Data Object Model",
    answerB: "B: Document Object Model",
    answerC: "C: Designated Object Model",
    answerD: "D: Descriptive Object Model",
    correctAnswer: "B",
  },
  {
    question:
      "Which method is used to split a string into an array of substrings?",
    answerA: "A: repeat()",
    answerB: "B: replace()",
    answerC: "C: split()",
    answerD: "D: trim()",
    correctAnswer: "C",
  },
];

function grade() {
  if (userChoice === correctAnswer) {
    userScore++;
    alert("Correct Answer! Your current score is " + userScore);
    qIndex++;
    console.log(userScore);
    renderQuestion(qIndex);
  } else {
    alert(
      "Sorry, that is not the correct answer, the correct answer is " +
        correctAnswer
    );
    qIndex++;
    console.log(userScore);
    renderQuestion(qIndex);
  }
  console.log("userchoice" + userChoice);
  userChoice = "";
  console.log("userchoice" + userChoice);
}

function renderQuestion(qIndex) {
  //clear previous question and answer elements
  questionInput.innerHTML = "";
  answerAInput.innerHTML = "";
  answerBInput.innerHTML = "";
  answerCInput.innerHTML = "";
  answerDInput.innerHTML = "";

  // update input fields with strings from each question and answer array based on index
  //for (var i = 0; i < questions.length; i++) {
  questionInput.textContent = questions[qIndex].question;
  answerAInput.textContent = questions[qIndex].answerA;
  answerBInput.textContent = questions[qIndex].answerB;
  answerCInput.textContent = questions[qIndex].answerC;
  answerDInput.textContent = questions[qIndex].answerD;
  correctAnswer = questions[qIndex].correctAnswer;
  // }

  console.log("qIndex is" + qIndex);
}

function timer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //game over;
    }
  }, 1000);
}

function beginQuiz() {
  alert(
    "Welcome to the Javascript Code Quiz. Answer the questions as quickly as possible. You have 60 seconds to complete 5 questions"
  );
}
answerAInput.addEventListener("click", function () {
  userChoice = "A";
  console.log("userChoice" + userChoice);
  grade();
});

answerBInput.addEventListener("click", function () {
  userChoice = "B";
  console.log("userChoice" + userChoice);
  grade();
});

answerCInput.addEventListener("click", function () {
  userChoice = "C";
  console.log("userChoice" + userChoice);
  grade();
});

answerDInput.addEventListener("click", function () {
  userChoice = "D";
  console.log("userChoice" + userChoice);
  grade();
});

beginQuiz();
timer();
renderQuestion(qIndex);
