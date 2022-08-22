var questions = [
    {
        numb : 1,
        question: "Question 1?",
        answer: "answer 1",
        options:[
            "answer 1",
            "answer x",
            "answer y",
            "answer r"
        ]
    },

    {
        numb : 2,
        question: "Question 2?",
        answer: "answer 1",
        options:[
            "answer 1",
            "answer x",
            "answer y",
            "answer r"
        ]
    },
    {
        numb : 3,
        question: "Question 3?",
        answer: "answer 1",
        options:[
            "answer 1",
            "answer x",
            "answer y",
            "answer r"
        ]
    },

    {
        numb : 4,
        question: "Question 4?",
        answer: "answer 1",
        options:[
            "answer 1",
            "answer x",
            "answer y",
            "answer r"
        ]
    },


]

//index and timer definition
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timer

//getting parameters from HTML

var startBtn = document.getElementById('start');
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var choicesEL = document.getElementById('choices');


function startQuiz(){
    var startScreenEl = document.getElementById('start');

    //hide element
    startScreenEl.setAttribute('class','hide');

    //shownelement 
    startScreenEl.removeAttribute('hide');

    //start time

   // timer = setInterval(clockTick, 1000);

    timerEl.textContent = 'Time Left : ' + time + 's';

    newQuestion();


}

function newQuestion(){
    var currentQuestion = questions[currentQuestionIndex];


    var titleEL = document.getElementById('question-title');

    titleEL.textContent = currentQuestion.title;

    //choicesEl.innerHTML = '';


    console.log(titleEL)

}

startQuiz();


