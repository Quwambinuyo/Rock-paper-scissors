document.querySelector(".rock-btn").addEventListener("click", rockBtn);
document.querySelector(".paper-btn").addEventListener("click", paperBtn);
document.querySelector(".scissors-btn").addEventListener("click", scissorsBtn);
document.querySelector(".reset-btn").addEventListener("click", resetBtn);
document.querySelector(".autoplay-btn").addEventListener("click", autoplayBtn);

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function updateScoreElement() {
  document.querySelector(
    ".score-output"
  ).innerHTML = ` wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
*/

function playGame(playerMove) {
  let computerMove = "";
  const randomNumber = Math.random();
  const pickComputerMove = computerMove;

  // console.log(randomNumber, Math.random());

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  if (computerMove === "rock") {
    result = "tie";
  } else if (computerMove === "paper") {
    result = "You lost";
  } else if (computerMove === "scissors") {
    result = "You win";
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lost") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".results").innerHTML = result;
  document.querySelector(".moves").innerHTML = `      You
  <img
  class="moves-img"
  src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png"
  alt=""
  />
  <img
  class="moves-img"
  src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove}-emoji.png"
  alt=""
  />
  Computer.`;
}
let autoPlayInterval;

function autoplayBtn(e) {
  // console.log(autoPlayInterval);

  if (autoPlayInterval) {
    // Stop Auto Play
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    document.querySelector(".autoplay-btn").textContent = "Start Auto Play";
  } else {
    // Start Auto Play every 1 second
    autoPlayInterval = setInterval(() => {
      const playerMove = getRandomMove();
      playGame(playerMove);
    }, 1000);
    document.querySelector(".autoplay-btn").textContent = "Stop Auto Play";
  }
}

function rockBtn(e) {
  playGame("rock");

  /*
  const randomNumber = Math.random();
  let computerMove = "";
  // console.log(randomNumber, Math.random());

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  if (computerMove === "rock") {
    result = "tie";
  } else if (computerMove === "paper") {
    result = "You lost";
  } else if (computerMove === "scissors") {
    result = "You win";
  }

  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
  */
}

function paperBtn(e) {
  playGame("paper");
  /*
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  if (computerMove === "rock") {
    result = "You win";
  } else if (computerMove === "paper") {
    result = "Tie";
  } else if (computerMove === "scissors") {
    result = "You lost";
  }

  alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
  */
}

function scissorsBtn(e) {
  playGame("scissors");
  /*
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  if (computerMove === "rock") {
    result = "You lost";
  } else if (computerMove === "paper") {
    result = "You win";
  } else if (computerMove === "scissors") {
    result = "Tie";
  }

  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
  */
}

function resetBtn(e) {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  updateScoreElement();

  localStorage.removeItem("score");

  // alert(`Your score has been reset
  //   wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}
  //   `);
}

// JavaScript

// Function to randomly select a move for Auto Play
function getRandomMove() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Toggle Auto Play functionality
// document.getElementById("autoPlayButton").addEventListener("click", () => {
// if (autoPlayInterval) {
//   // Stop Auto Play
//   clearInterval(autoPlayInterval);
//   autoPlayInterval = null;
//   document.getElementById("autoPlayButton").textContent = "Start Auto Play";
// } else {
//   // Start Auto Play every 1 second
//   autoPlayInterval = setInterval(() => {
//     const playerMove = getRandomMove();
//     playGame(playerMove);
//   }, 1000);
//   document.getElementById("autoPlayButton").textContent = "Stop Auto Play";
// }
// });
