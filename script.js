var questionInput = document.querySelector("#questionText");
var answerAInput = document.querySelector("#answerAText");
var answerBInput = document.querySelector("#answerBText");
var answerCInput = document.querySelector("#answerCText");
var answerDInput = document.querySelector("#answerDText");
var timeEl = document.querySelector("#timer");
var qIndex = 0;
var secondsLeft = 100;

const questions = [
    { question: "Arrays in javascript can be used for___",
      answerA: "A: dividends", answerB: "B:assets", answerC: "C: storing an ordered list of data",
      answerD: "D:working out", correctAnswer: "C"},
      { question: "A function is executed when something _____ it",
      answerA: "A: activates", answerB: "B:invokes", answerC: "C: actualizes",
      answerD: "D:begins", correctAnswer: "B"}]
let userScore = 0;
let userChoice = "";
let correctAnswer = "";

function grade () {
    if (userChoice === correctAnswer) {
        userScore++;
        alert("Correct Answer! Your current score is " + userScore);
        qIndex++;
        console.log(userScore);
        renderQuestion(qIndex);
    }
    else  {
        alert("Sorry, that is not the correct answer, the correct answer is " + correctAnswer);
        qIndex++;
        console.log(userScore);
        renderQuestion(qIndex);
    }
    userChoice= "";
}

function renderQuestion(i) {
    //clear previous question and answer elements
    questionInput.innerHTML= "";
    answerAInput.innerHTML= "";
    answerBInput.innerHTML= "";
    answerCInput.innerHTML= "";
    answerDInput.innerHTML= "";
    
// update input fields with strings from each question and answer array based on index
//for (var i = 0; i < questions.length; i++) {
    questionInput.textContent = questions[i].question;
    answerAInput.textContent = questions[i].answerA;
    answerBInput.textContent = questions[i].answerB;
    answerCInput.textContent = questions[i].answerC;
    answerDInput.textContent = questions[i].answerD;
    correctAnswer= questions[i].correctAnswer;
   // }   
    
    
    answerAInput.addEventListener("click", function(){
        userChoice = "A";
        console.log(userChoice);
        grade ();
    });

    answerBInput.addEventListener("click", function(){
        userChoice = "B";
        console.log(userChoice);
        grade ();
    });

    answerCInput.addEventListener("click", function(){
        userChoice = "C";
        console.log(userChoice);
        grade ();
    });

    answerDInput.addEventListener("click", function(){
        userChoice = "D";
        console.log(userChoice);
        grade ();
    });
    }

function timer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          //game over;
        }
    
      }, 1000);
    }

timer ();
renderQuestion (0);