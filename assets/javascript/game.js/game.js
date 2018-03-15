// random number variable
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
// wins, losses, and guesses variables
var wins = 0;
var losses = 0;
var guesses = 9;
// variable to get random letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuessSoFar = [];
// variables to manipulate the DOM
var winPoints = document.getElementById("wins");
var guessesLeft = document.getElementById("guessLeft");
var losePoints = document.getElementById("losses");
var guessSoFar = document.getElementById("guessMade");

// function to display wins, losses an guesses left
function updateDisplay() {
  winPoints.textContent = wins;
  guessesLeft.textContent = guesses;
  losePoints.textContent = losses;
  console.log("working")
}

// begins function to compare user guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    guessSoFar.textContent = userGuessSoFar;
  
    // loops
    if (userGuess == computerGuess) {
      
      wins++;
      guesses = 9
      userGuessSoFar = [];
      computerGuess = letters[Math.floor(Math.random() * letters.length)];
      
    } else {
  
      guesses--;
  
      if (guesses == 0) {
        losses++;
        userGuessSoFar = [];
        guesses = 9;
      }
  
    }
    //update display
    updateDisplay();
  
  }
  
  
  
