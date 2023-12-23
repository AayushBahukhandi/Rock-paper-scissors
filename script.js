const rps = ["Rock", "Paper", "Scissors"];
const computerPlay = () => rps[Math.floor(Math.random() * rps.length)];

function playRound(playerSelection, computerSelection) {
  const difference =
    (rps.length +
      rps.indexOf(playerSelection) -
      rps.indexOf(computerSelection)) %
    rps.length;
  switch (difference) {
    case 0:
      return "It's a draw!";
    case 2:
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    default:
      return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

let computerSelection = computerPlay();
let playerSelection;
while (!rps.includes(playerSelection)) {
  const selected = prompt("Choose Rock Paper or Scissors").trim().toLowerCase();

  playerSelection = selected[0].toUpperCase() + selected.slice(1);
}
console.log(playRound(playerSelection, computerSelection));
