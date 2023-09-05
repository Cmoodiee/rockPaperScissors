function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    const rockPaperScissors = ["rock" , "paper" , "scissors"];
    return rockPaperScissors[num];
}

function playGame() {
   const userInput = prompt("Make a choice. Rock, paper, or scissors:");
   const computerSelection = getComputerChoice()
   const playerSelection = userInput.toLowerCase()

   if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Draw!")
   } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Draw!")
   } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("Draw!")
   }

   if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win, Rock beats Scissors.")
   }else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win, Paper beats Rock.")
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win, Scissors beats Paper.")
   }

   if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose, Paper beats Rock.")
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose, Scissors beats Paper.")
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose, Rock beats Scissors.")
   }

   return playerSelection, computerSelection;
}
playGame()

// create a function to get computer choice
// randomly return rock paper or scissors
// write a function that plays a single round of rock paper scissors
// function should take player selection and computer selection
// return a string that declares the winner of the round
// make functions for player selection case insensitive
// return results of function call not console.log(), use return later on