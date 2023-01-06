const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;

// get computer's choice
function getComputerChoice() {
    const compSelect = choices[Math.floor(Math.random() * 3)]
    return compSelect;
}

function game() {
    // play 5 round of the game
    for (i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        // prompt user to choose rock, paper, or scissors
        let playerSelection = prompt(`Choose ROCK, PAPER, or SCISSORS:\nGame ${i + 1} of 5`);
        if (playerSelection === null) {break;} 
        playerSelection = playerSelection.toLowerCase();
        while (!choices.includes(playerSelection)) {
            playerSelection = prompt('Choice must be ROCK, PAPER, or SCISSORS')
            if (playerSelection === null) {continue;}
            playerSelection = playerSelection.toLowerCase();
        }
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Game Over!\nScore: ${playerScore}`)
}

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
            playerScore++
            return `You Win! ${playerSelection} beats ${computerSelection}`;

        case 'paper':
            if (computerSelection === 'scissors') {
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            };
            playerScore++
            return `You Win! ${playerSelection} beats ${computerSelection}`;

        case 'scissors':
            if (computerSelection === 'rock') {
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            };
            playerScore++
            return `You Win! ${playerSelection} beats ${computerSelection}`;

        default:
            return 'Something went very, very wrong :(';
    }
}

game();