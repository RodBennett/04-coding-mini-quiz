// Define variables
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const exitBtn = document.querySelector("#exit-btn");
const answerBtn = document.querySelector("#answer-buttons");
const showQuestion = document.querySelector('#questions');
const welcome = document.querySelector("#intro");

let timerElement = document.querySelector("#time-remaining");
let secondsLeft = 5;

// add event listeners to buttons
startBtn.addEventListener('click', startQuiz);


function startQuiz() {
    startBtn.classList.add('hide');
    welcome.classList.add('hide');
    showQuestion.classList.remove('hide');
    nextBtn.classList.remove('hide');
    setTime();
}

function setTime() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    showQuestion.textContent = "Would you like to try again?";
    nextBtn.classList.add('hide');
    startBtn.classList.remove('hide');
    exitBtn.classList.remove('hide');
}

// function selectAnswer() {

// }
// function setNextQuestion() {

// // }

// // function resetQuiz(){

// // }

// // function endQuiz() {
// //     if (exitBtn) {

// //     } 

// // }



// // function setTime(){
// //     let timerInterval = setInterval(function() {
// //         secondsLeft--;
// //         timerElement.textContent = 'Time remaining: ' + secondsLeft;
// //         if (secondsLeft === 0) {
// //             clearInterval(timerInterval);
// //             resetQuiz();
// //   



// // function setItem (){

// // }

// // function getItem() {
    
// // }




// // let quizQuestions = [

// // { "1. What do the initials DOM stand for?"},

// // {"2.  Which of the following is NOT a key word of a variable?"},

// // {"3. How many if/esle statements can one function handle? },
// // {"4. How do you add functionality to a button?"},
// // {"5. What should we use the eventDefault method for?"},
// // ]


// // // CREATE APPEND 
// // // var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// // // if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
// // //   alert("please enter a valid tag");
// // // } else {
// // //   // Creates element based on tag entered by user
// // //   var tag = document.createElement(tagName);

// // //   // Adds text content to created tag
// // //   tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
// // //   // Appends tag as child of document body
// // //   document.body.appendChild(tag);
// // // }

// // // var nextTag = confirm("Would you like to add another tag?");






// // // // Add event listeners

// // // // Access toggle switch HTML element
// // // var themeSwitcher = document.querySelector("#theme-switcher");
// // // var container = document.querySelector(".container");

// // // // Set default mode to dark
// // // var mode = "dark";

// // // // Listen for a click event on toggle switch
// // // themeSwitcher.addEventListener("click", function() {
// // //   // If mode is dark, apply light background
// // //   if (mode === "dark") {
// // //     mode = "light";
// // //     container.setAttribute("class", "light");
// // //   }
// // //   // If mode is light, apply dark background 
// // //   else {
// // //     mode = "dark";
// // //     container.setAttribute("class", "dark");
// // //   }
// // // });


// // // //keybaord events
// // // var typefaceEl = document.querySelector('#typeface');
// // // var clearEl = document.querySelector('#clear');
// // // var h1El = document.querySelector('#h1');
// // // var h2El = document.querySelector('#h2');
// // // var h3El = document.querySelector('#h3');
// // // var pEl = document.querySelector('#p');
// // // var textAreaEl = document.querySelector('#textarea');

// // // var elements = [h1El, h2El, h3El, pEl];

// // // var typeface;

// // // // Change event
// // // typefaceEl.addEventListener('change', function (event) {
// // //   event.preventDefault();
// // //   typeface = typefaceEl.value;
// // //   document.querySelector('.container').style.fontFamily = typeface;
// // // });

// // // // Keydown event 
// // // textAreaEl.addEventListener('keydown', function (event) {
// // //   // Access value of pressed key with key property
// // //   var key = event.key.toLowerCase();
// // //   var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
// // //     ''
// // //   );
// // //   if (alphabetNumericCharacters.includes(key)) {
// // //     for (var i = 0; i < elements.length; i++) {
// // //       elements[i].textContent += event.key;
// // //     }
// // //   }
// // // });

// // // clearEl.addEventListener('click', function (event) {
// // //   event.preventDefault();
// // //   textAreaEl.value = '';

// // //   for (var i = 0; i < elements.length; i++) {
// // //     elements[i].textContent = '';
// // //   }
// // // });

// // // // saving and displaying high score:

// // // function init() {
// // //     getWins();
// // //     getlosses();
// // //   }

// // //   function setWins() {
// // //     win.textContent = winCounter;
// // //     localStorage.setItem("winCount", winCounter);
// // //   }

// // //   function getWins() {
// // //     // Get stored value from client storage, if it exists
// // //     var storedWins = localStorage.getItem("winCount");
// // //     // If stored value doesn't exist, set counter to 0
// // //     if (storedWins === null) {
// // //       winCounter = 0;
// // //     } else {
// // //       // If a value is retrieved from client storage set the winCounter to that value
// // //       winCounter = storedWins;
// // //     }
// // //     //Render win count to page
// // //     win.textContent = winCounter;
// // //   }

// // //   function checkWin() {
// // //     // If the word equals the blankLetters array when converted to string, set isWin to true
// // //     if (chosenWord === blanksLetters.join("")) {
// // //       // This value is used in the timer function to test if win condition is met
// // //       isWin = true;
// // //     }
// // //   }

// // //   function resetGame() {
// // //   // Resets win and loss counts
// // //   winCounter = 0;
// // //   loseCounter = 0;
// // //   // Renders win and loss counts and sets them into client storage
// // //   setWins()
// // //   setLosses()
// // // }
// // // // Attaches event listener to button
// // // resetButton.addEventListener("click", resetGame);
