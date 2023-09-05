console.log("hello world");

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    const rockPaperScissors = ["Rock" , "Paper" , "Scissors"];
    // const Rock = 1;
    // const Paper = 2;
    // const Scissors = 3;

    console.log(`${rockPaperScissors[num]}`)
}

// let random number equal the string for each choice 
// print the string

getComputerChoice()
// create a function to get computer choice
// randomly return rock paper or scissors
// write a function that plays a single round of rock paper scissors
// function should take player selection and computer selection
// return a string that declares the winner of the round
// make functions for player selection case insensitive
// return results of function call not console.log(), use return later on