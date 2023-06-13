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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie! You both chose ${playerSelection}!`);
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      "What'll it be? Rock, paper, or scissors?"
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

console.log(game());
