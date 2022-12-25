// Define variables
const startBtn = document.querySelector("#start-btn");
const playAgainBtn = document.querySelector('#play-again-btn');
const checkScoreBtn = document.querySelector('#check-score-btn');
const answerButtonContainer = document.querySelector("#answer-buttons");
const submitBtn = document.querySelector('#submit-button');
const tryAgainBtn = document.getElementById('tryagain-btn');
const questionElement = document.querySelector('#question');
const welcome = document.querySelector("#intro");
const questionContainerEl = document.querySelector("#question-container");
const timerElement = document.querySelector("#time-remaining");
const scoreElement = document.querySelector('#score');
const formScoreElement = document.getElementById('form-score');
const initialsElement = document.querySelector('#initials')
const formElement = document.getElementById('form-card');
const correctWrong = document.getElementById('correct-wrong');

//Game variables
let score;
let currentQuestionIndex;
let secondsLeft;
let timerInterval;

// Quiz questions array:
const questions = [
    { 
    question: "What do the initials DOM stand for?",
    answers: [
        {text: 'Dogel On Mars', correct: false},
        {text: 'Data Orangautan Master', correct: false},
        {text: 'Document Object Model', correct: true},
        {text: 'Decimal Object Method', correct: false}
            ] 
    },
        {
    question: "Which of the following is NOT a key word of a variable?",
        answers: [
            {text: 'var', correct: false},
            {text: 'HELP!', correct: true},
            {text: 'const', correct: false},
            {text: 'let', correct: false}
            ] 
    },
        {
    question: 'How many if/esle statements can one function handle?',
        answers: [
            {text: '7', correct: false},
            {text: '8', correct: false},
            {text: '9', correct: false},
            {text: 'no limit', correct: true}
            ] 
    },
        {
     question: "How do you add functionality to a button?",
        answers: [
            {text: '.addEventListener', correct: true},
            {text: '.querySelector', correct: false},
            {text: '.setAttribute', correct: false},
            {text: '.getElementbyId', correct: false}
            ] 
        },
        {
    question: "What should we use the preventDefault method for?",
         answers: [
            {text: 'To prevent HTML forms from deleting inputs', correct: true},
            {text: 'To prevent new coders from learning js', correct: false},
            {text: 'To prevent a nuclear holocaust', correct: false},
            {text: 'To prevent defaulting on debts', correct: false}
        ]
     }
]
function startQuiz() {
    secondsLeft = 70;
    currentQuestionIndex = 0;
    score=0;
    formScoreElement.textContent = 'Your high score is ';
    scoreElement.textContent = score;
    timerElement.textContent=secondsLeft;
    startBtn.classList.add('hide');
    welcome.classList.add('hide');
    answerButtonContainer.classList.remove('hide');
    questionContainerEl.classList.remove('hide');
    checkScoreBtn.classList.add('hide');
    correctWrong.textContent = '';
    initialsElement.textContent = '';
    showQuestion();
    setTime();
}

function showQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question
    answerButtonContainer.innerHTML=''
    //loop through the answers generate buttons for the answers and append to div #answer-buttons
    const thisAnswers = questions[currentQuestionIndex].answers;
    for (let index = 0; index < thisAnswers.length; index++) {
        var answerButton = document.createElement('button');
        answerButton.textContent = thisAnswers[index].text;
        answerButton.dataset.isCorrect = thisAnswers[index].correct
        answerButton.addEventListener('click', selectAnswer)
        answerButtonContainer.append(answerButton)
    }
}
// true or false answers
function selectAnswer(e) {
    // figure out if there is another question to go on to or if we are at the end
    if (e.target.dataset.isCorrect==="true") {
        score += 5;
        scoreElement.textContent = score;
        correctWrong.textContent = 'Correct!'
    } else {
        secondsLeft -= 10;
        correctWrong.textContent = 'Wrong!'
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++
        showQuestion()
    } else {
        endGame()
    }
}

function endGame() {
    formScoreElement.append(score);
    checkScoreBtn.classList.remove('hide');
    checkScoreBtn.addEventListener('click', highScore)
    questionContainerEl.classList.add('hide');
    startBtn.classList.remove('hide');
    startBtn.textContent = 'Play Again?'
    clearInterval(timerInterval);
}
//makes the final form for users to input initials visible
function highScore() {
    formElement.classList.remove('hide');
}

// Set form initials to local storage
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var formInput = {
       initials: initialsElement.value.trim(),
    };
    localStorage.setItem("input", JSON.stringify(formInput));
});

// Get initials from local storage
function renderMessage() {
    var userInitials = JSON.parse(localStorage.getItem("formInput"));
    document.querySelector('#init').value = userInitials.initials + score
}

// add event listeners to buttons
startBtn.addEventListener('click', startQuiz);
tryAgainBtn.addEventListener('click',()=>{location.assign('index.html');});


// timer
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft;
        if(secondsLeft <= 0) {
            endGame();
        }
    }, 1000);
}
