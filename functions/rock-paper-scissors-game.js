const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "scissors" || userInput === "paper" || userInput === "bomb") {
      return userInput;
    } else {
      console.log("You must input rock, paper, or scissors.");
    }
  }
  
  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2: 
        return "scissors";
    } 
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "This game ended in a tie!";
    } else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
      return "The user won!";
    } else if (userChoice === "bomb") {
      return "You have the cheat code! Automatic win!";
    } else {
      return "The computer won!";
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();