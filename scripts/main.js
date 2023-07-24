function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  return choices[randomChoice];
}

function playGame(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "Tie";
  }
  if ((playerChoice == "Rock" && computerChoice == "Scissors")
   || (playerChoice == "Scissors" && computerChoice == "Paper")
   || (playerChoice == "Paper" && computerChoice == "Rock")) {
    return "You won!";
  }
  return "You lost!";
}
