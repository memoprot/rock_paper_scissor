function getComputerChoice() {
  const array = ["ROCK", "PAPER", "SCISSOR"];
  const r_n = Math.floor(Math.random() * 3);
  return array[r_n];
}

function winner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSOR") {
    return "player";
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "player";
  } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER") {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection, winnerResult) {
  if (winnerResult == "player") {
    return alert(
      `Congrats Player! ${playerSelection} beats ${computerSelection}`
    );
  } else if (winnerResult == "computer") {
    return alert(
      `Congrats Computer! ${computerSelection} beats ${playerSelection}`
    );
  } else {
    return alert("Tie, try again.");
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundNumber = 5;

  for (let i = 0; i < roundNumber; i++) {
    const playerSelection_ = prompt().toUpperCase();
    const computerSelection_ = getComputerChoice();
    const winnerResult_ = winner(playerSelection_, computerSelection_);
    playRound(playerSelection_, computerSelection_, winnerResult_);
    if (winnerResult_ == "tie") {
      roundNumber++;
    } else {
      winnerResult_ == "player" ? playerScore++ : computerScore++;
    }
  }

  if (playerScore > computerScore) {
    return `The winner is Player. Score: ${playerScore}-${computerScore}.`;
  } else {
    return `The winner is Computer. Score: ${playerScore}-${computerScore}.`;
  }
}

console.log(game());
