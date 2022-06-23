const game = () => {
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const playBtn = document.querySelector(".rps-result");
    const winner = document.querySelector(".winner");

    playBtn.addEventListener("click", function () {
      playerHand.src = `./assets/images/question.png`;
      computerHand.src = `./assets/images/question.png`;
      winner.classList.add("fadeOut");
    });

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/images/${this.textContent}.png`;
          computerHand.src = `./assets/images/${computerChoice}.png`;
          //show play button
          playBtn.classList.add("fadeIn");
          winner.classList.remove("fadeOut");
        }, 500);
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "You Won";
        return;
      } else {
        winner.textContent = "You Lost";
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "You Lost";
        return;
      } else {
        winner.textContent = "You Won";
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "You Lost";
        return;
      } else {
        winner.textContent = "You Won";
        return;
      }
    }
  };

  
  //Is call all the inner function
  playMatch();
};

//start the game function
game();
