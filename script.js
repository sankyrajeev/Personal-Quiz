var questions = [
    {
        numb: 1,
        question: "Commonly used data types DO NOT include:",
        answer: "Alerts",
        options: [
            'Strings', 'Booleans', 'Alerts', 'Numbers'
        ]
    },

    {
        numb: 2,
        question: "The condition in an if / else statement is enclosed within ____.",
        answer: "Parentheses",
        options: [
            'Quotes', 'Curly Brackets', 'Parentheses', 'Square brackets'
        ]
    },
    {
        numb: 3,
        question: "Arrays in JavaScript can be used to store ____.",
        answer: "All of the Above",
        options: [
            'Numbers and Strings',
            'Other Arrays',
            'Booleans',
            'All of the Above'
        ]
    },

    {
        numb: 4,
        question: "'String values must be enclosed within ____ when being assigned to variables.'",
        answer: "Quotes",
        options: [
            'Commas', 'Curly Brackets', 'Quotes', 'Parentheses'
        ]
    },


]

//index and timer definition
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timer
var finalScore = 0; 

var score = 0;

var endScreenEl = document.getElementById('end-screen');
endScreenEl.style.visibility = 'hidden';


//getting parameters from HTML

var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var choicesEL = document.getElementById('choices');
var feedbackEl = document.getElementById('feedback');


//console.log(startBtn);


function startQuiz() {
    var startScreenEl = document.getElementById('start');

    //hide element
    // startScreenEl.setAttribute('class', 'hide');

    startScreenEl.style.visibility = "hidden";

    //shownelement 
    questionsEl.removeAttribute('class');

    //start time

    timer = setInterval(clockTick, 1000);

    timerEl.textContent = 'Time Left : ' + time + 's';

   // clickQuestion();
   newQuestion();




}


function newQuestion() {
    var currentQuestion = questions[currentQuestionIndex];


    var titleEL = document.getElementById('question-title');

    titleEL.textContent = currentQuestion.question;

    choicesEL.innerHTML = '';

    for (var i = 0; i < currentQuestion.options.length; i++) {
        // create new button for each choice
        var choice = currentQuestion.options[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);
        console.log(choiceNode);

        choiceNode.textContent = i + 1 + '. ' + choice
        choicesEL.appendChild(choiceNode)
    }




}

function clickQuestion(event) {
    // document.getElementById('choices').addEventListener('click', function (event) {
        var btnEl = event.target;
        // event.preventDefault();

        if (!btnEl.matches('.choice')) {    //check here later
            return;
        }


        if (btnEl.value !== questions[currentQuestionIndex].answer) {
            time -= 15;
            console.log(time);

            if (time < 0) {
                time = 0;
            }
            timerEl.textContent = 'Time Left : ' + time + 's';;

            //btnEl.setAttribute('style', 'background-color:red');
            feedbackEl.textContent = 'Wrong Answer!';
            finalScore -= 5;



        }
        else {
            //btnEl.setAttribute('style', 'background-color:green');
            feedbackEl.textContent = 'That is Correct!';
            finalScore += 5;
            console.log(finalScore);
        }

        currentQuestionIndex++;

        if (time <= 0 || currentQuestionIndex === questions.length) {
            quizEnd();
            console.log("LLL");
            highScores();
        } else {
            newQuestion();
        }



    
}

function quizEnd() {
    // stop timer
    clearInterval(timer);
  
   
    questionsEl.setAttribute('class', 'hide');
  }

  function clockTick() {
    // update time
    time--;
    timerEl.textContent = 'Time Left : ' + time + 's';
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

function highScores(){
    endScreenEl.style.visibility = 'visible';
    var startScreenEl = document.getElementById('start');
    startScreenEl.textContent = "";
    questionsEl.textContent="";
    timerEl.textContent = 'Time Completed';
    timerEl.setAttribute('style','color:red');

    theScore = document.getElementById('final')
    theScore.textContent="The Final Score is :  " + finalScore;


}

function saveHighscore() {
    
    var initials = initialsEl.value.trim();
  
  
    if (initials !== '') {
      
      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      
      var newScore = {
        score: time,
        initials: initials,
      };
  
      
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));

      console.log(highScores);

      var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

      for (var i = 0; i < highscores.length; i += 1) {
        // create li tag for each high score
        var liTag = document.createElement('li');
        liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
    
        // display on page
        var olEl = document.getElementById('highscores');
        olEl.appendChild(liTag);
      }
  
      
      //window.location.href = 'highscores.html';
    }
  }

  function checkForEnter(event) {
   
    if (event.key === 'Enter') {
      saveHighscore();
    }
  }




//startQuiz();
//clickQuestion();

startBtn.onclick = startQuiz;
choicesEL.onclick = clickQuestion;
submitBtn.onclick = saveHighscore;


