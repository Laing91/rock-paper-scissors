let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");
let resultText = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
let gameState = 0;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


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

function updateScore() {
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
}
updateScore();

function reset() {
  gameState = 0;
  playerScore = 0;
  computerScore = 0;
  resultText.innerHTML = "";
  updateScore();
  document.getElementById("resetButton").classList.add("hidden");
}

function makeResetButtonVisible() {
  document.getElementById("resetButton").classList.remove("hidden");
}
