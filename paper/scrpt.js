// Check local storage for existing score or set to 0
let score = localStorage.getItem("score") || 0;
updateScore();

function makeChoice(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const result = compareChoices(playerChoice, computerChoice);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;

  updateScore();
}

function compareChoices(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    score++;
    localStorage.setItem("score", score);
    return "You win!";
  } else {
    return "You lose!";
  }
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score;
}
