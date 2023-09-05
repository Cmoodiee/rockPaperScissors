function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    const rockPaperScissors = ["Rock" , "Paper" , "Scissors"];
    return rockPaperScissors[0];
}

function playGame() {
   const playerSelection = prompt("Make a choice. Rock, paper, or scissors:");
   const computerSelection = getComputerChoice()

   if (playerSelection === "Rock" && computerSelection === "Rock") {
    console.log("Draw!")
   }
}
playGame()


// function getComputerChoice() {
//     const num = Math.floor(Math.random() * 3)
//     const rockPaperScissors = ["Rock" , "Paper" , "Scissors"];
//     return rockPaperScissors[0]
// }

// function playGame() {
//    const playerSelection = prompt("Make a choice. Rock, paper, or scissors:");
//    const computerSelection = getComputerChoice()

//    if (playerSelection === "Rock" && computerSelection === "Rock") {
//     console.log("Draw!")
//    } 
// }

// playGame()

// create a function to get computer choice
// randomly return rock paper or scissors
// write a function that plays a single round of rock paper scissors
// function should take player selection and computer selection
// return a string that declares the winner of the round
// make functions for player selection case insensitive
// return results of function call not console.log(), use return later on