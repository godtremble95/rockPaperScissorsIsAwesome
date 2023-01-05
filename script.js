const choices = ['rock', 'paper', 'scissors'];

// get computer's choice
function getComputerChoice() {
    const compSelect = choices[Math.floor(Math.random() * 3)]
    return compSelect;
}

// prompt user to choose rock, paper, or scissors
// compare results and log answer
function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));