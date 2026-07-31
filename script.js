const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const winnerMessage = document.querySelector("#winnerMessage");

const pingBall = document.querySelector("#pingBall");

pingBall.addEventListener("animationend", () => {
  pingBall.classList.remove("animate");
});

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

// Player One Button

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;

      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
      winnerMessage.textContent = "🏆 PLAYER ONE WINS! 🏆";
      winnerMessage.classList.add("show");
      pingBall.classList.add("animate");
    }

    p1Display.textContent = p1Score;
  }
});

// Player Two button

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;

      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      winnerMessage.textContent = "🏆 PLAYER TWO WINS! 🏆";
      winnerMessage.classList.add("show");
      pingBall.classList.add("animate");
    }

    p2Display.textContent = p2Score;
  }
});

// Changing the winning score

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

// Reset function

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  winnerMessage.classList.remove("show");
}

resetButton.addEventListener("click", reset);
