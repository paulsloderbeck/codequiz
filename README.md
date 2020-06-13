# codequiz
This is a short code quiz designed using javascript. The UI was designed with Bootstrap elements in HTML. The banner features a button for high scores, as well as a countdown timer. The question texts are presented in a jumbotron, with answer text appearing in four answer buttons. 

The questions are stored as objects in a question constant. Each question object has a question, four answers, and a correctanswer. The functionality of the quiz works with a renderQuestion function with parameter qIndex. The renderQuestion first checks if the qIndex is equal to the lenth of the array of questions, and if so, it runs the endQuiz function. RenderQuestion then clears the HTML for the innerHTML of the question buttons, and updates the textcontent for the index. 

Each answer button contains a click listener which sets a userChoice variable to the answer selected. The grade function then checks whether the userChoice matches the correctAnswer, and updates the userScore if it does. Otherwise, it alerts the user of a wrong answer. The grade function clears out the userChoice. The grade function at the end of each click listener forces the program to wait until an answer is received before rendering the next question.

The timer uses the setInterval method to set the text content of the time Element to a countdown clock. If the time left is 0, the timer function invokes the endQuiz function. 

The localStorage feature is used to store scores within the localStorage key. These strings are parsed and set to a highScores array. The highScores array is updated via a push method each time the quiz ends. The displayScores function is invoked when the user clicks the View High Scores Button.

Check out the finished product here: https://paulsloderbeck.github.io/codequiz/

![Code Quiz Screen Shot] (https://github.com/paulsloderbeck/codequiz/blob/master/codequizscreenshot.png)


