function getComputerChoice() {
  let ranNumber = Math.floor(Math.random() * 3);
  if (ranNumber === 0) {
    return "rock";
  } else if (ranNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");

const playerScoreText = document.querySelector(".player.score.text");
const cpuScoreText = document.querySelector(".cpu.score.text");

let playerScore = 0;
let cpuScore = 0;

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = `It's a tie! You both chose ${playerSelection}!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    cpuScore += 1;
    cpuScoreText.textContent = `${cpuScore}`;
  } else {
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    playerScore += 1;
    playerScoreText.textContent = `${playerScore}`;
  }
}

/*
function game() {
  // for (let i = 0; i < 5; i++) {
  playerSelection = prompt(
    "What'll it be? Rock, paper, or scissors?"
  ).toLowerCase();
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  //}
}

console.log(game());
*/
