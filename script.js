var questionInput = document.querySelector("#questionText");
var answerAInput = document.querySelector("#answerAText");
var answerBInput = document.querySelector("#answerBText");
var answerCInput = document.querySelector("#answerCText");
var answerDInput = document.querySelector("#answerDText");

const questions = ["Arrays in javascript can be used for___"];
const answerA = ["dividends"];
const answerB = ["assets"];
const answerC = ["storing information"];
const answerD = ["working out"];

renderQuestion ();

function renderQuestion() {
    //clear previous question and answer elements
    questionInput.innerHTML= "";
    answerAInput.innerHTML= "";
    answerBInput.innerHTML= "";
    answerCInput.innerHTML= "";
    answerDInput.innerHTML= "";
// update input fields with strings from each question and answer array based on index
for (var i = 0; i < questions.length; i++) {
    questionInput.textContent = questions[i];
    answerAInput.textContent = answerA[i];
    answerBInput.textContent = answerB[i];
    answerCInput.textContent = answerC[i];
    answerDInput.textContent = answerD[i];
    }
}   