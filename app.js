let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");
let resultText = document.getElementById("result");


//variables set for players and game score.
let playerScore = 0;
let computerScore = 0;
let gameState = 0;


//random generator function for computers choice of rock, paper, scissors.
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


//function with if statements to track game player vs computer.
function playRound(playerSelection) {
  if (gameState == 0) {
    let computerSelection = computerPlay();
    let result = "";

    if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
      playerScore += 1;
      result = "You win! " + playerSelection + " beats " + computerSelection;
      updateScore();


      if (playerScore == 5) {
        result += "<br><br>You won the game!";
        gameState = 1;
        makeResetButtonVisible();
      }
    } else if (playerSelection == computerSelection) {
      result = "It's a tie. You both chose " + playerSelection;
      updateScore();
    } else {
      computerScore += 1;
      result = "You lose! " + computerSelection + " beats " + playerSelection;
      updateScore();

      if (computerScore == 5) {
        result += "<br><br>I won the game!";
        gameState = 1;
        makeResetButtonVisible();
      }
    }

    document.getElementById("result").innerHTML = result;
    return;
  }
}

//function to automatically update the score.
function updateScore() {
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
}
updateScore();

//function to reset the score once player/computer reaches 5.
function reset() {
  gameState = 0;
  playerScore = 0;
  computerScore = 0;
  resultText.innerHTML = "";
  updateScore();
  document.getElementById("resetButton").classList.add("hidden");
}

//function to show the reset button once player/computer reaches 5 and wins.
function makeResetButtonVisible() {
  document.getElementById("resetButton").classList.remove("hidden");
}
