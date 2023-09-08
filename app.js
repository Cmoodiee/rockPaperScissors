function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    const rockPaperScissors = ["rock" , "paper" , "scissors"];
    return rockPaperScissors[num];
}

// function playGame() {
//    const userInput = prompt("Make a choice. Rock, paper, or scissors:");
//    const computerSelection = getComputerChoice()
//    const playerSelection = userInput.toLowerCase()

//    if (playerSelection === "rock" && computerSelection === "rock") {
//     console.log("Draw!")
//    } else if (playerSelection === "paper" && computerSelection === "paper") {
//     console.log("Draw!")
//    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
//     console.log("Draw!")
//    }

//    if (playerSelection === "rock" && computerSelection === "scissors") {
//     console.log("You win, Rock beats Scissors.")
//    }else if (playerSelection === "paper" && computerSelection === "rock") {
//     console.log("You win, Paper beats Rock.")
//    } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     console.log("You win, Scissors beats Paper.")
//    }

//    if (playerSelection === "rock" && computerSelection === "paper") {
//     console.log("You lose, Paper beats Rock.")
//    } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     console.log("You lose, Scissors beats Paper.")
//    } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     console.log("You lose, Rock beats Scissors.")
//    }
//    return playerSelection, computerSelection;
// }
// playGame()
let playerScore = 0
let computerScore = 0

function fullGame() {

    function playGame() {
        const userInput = prompt("Make a choice. Rock, paper, or scissors:");
        const computerSelection = getComputerChoice()
        const playerSelection = userInput.toLowerCase()
        
     
        if (playerSelection === "rock" && computerSelection === "rock") {
            playerScore++
            computerScore++
         console.log(`Draw! The score is ${playerScore} - ${computerScore}.`)
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            playerScore++
            computerScore++
         console.log(`Draw! The score is ${playerScore} - ${computerScore}.`)
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            playerScore++
            computerScore++
         console.log(`Draw! The score is ${playerScore} - ${computerScore}.`)
        }
     
        if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
         console.log(`You win, Rock beats Scissors. The score is ${playerScore} - ${computerScore}.`)
        }else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
         console.log(`You win, Paper beats Rock. The score is ${playerScore} - ${computerScore}.`)
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
         console.log(`You win, Scissors beats Paper. The score is ${playerScore} - ${computerScore}.`)
        }
     
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++
         console.log(`You lose, Paper beats Rock. The score is ${playerScore} - ${computerScore}.`)
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++
         console.log(`You lose, Scissors beats Paper. The score is ${playerScore} - ${computerScore}.`)
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++
         console.log(`You lose, Rock beats Scissors. The score is ${playerScore} - ${computerScore}.`)
        }
        return playerSelection, computerSelection;
     }

     for(let i = 0; i < 5; i++) {
        console.log(i)
        playGame()
    }
    if(playerScore > computerScore) {
        console.log("You win, humanity gets to survive!!!!")
    } else {
        console.log("You lose, humanity dies and the robots take over :(")
    }
}
fullGame()
// create a function to get computer choice
// randomly return rock paper or scissors
// write a function that plays a single round of rock paper scissors
// function should take player selection and computer selection
// return a string that declares the winner of the round
// make functions for player selection case insensitive
// return results of function call not console.log(), use return later on