const choices = ['rock', 'paper', 'scissors'];

// get computer's choice
function getComputerChoice() {
    const compSelect = choices[Math.floor(Math.random() * 3)]
    return compSelect;
}

// prompt user to choose rock, paper, or scissors
// compare results and log answer
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!';
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            };
            return `You Win! ${playerSelection} beats ${computerSelection}`;

        case 'paper':
            if (computerSelection === 'scissors') {
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            };
            return `You Win! ${playerSelection} beats ${computerSelection}`;

        case 'scissors':
            if (computerSelection === 'rock') {
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            };
            return `You Win! ${playerSelection} beats ${computerSelection}`;

        default:
            return 'Something went very, very wrong :(';
    }
}

const playerSelection = 'scissors';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));