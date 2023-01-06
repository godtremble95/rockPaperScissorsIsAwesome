const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection

// get computer's choice
function getComputerChoice() {
    const compSelect = choices[Math.floor(Math.random() * 3)]
    return compSelect;
}

function game() {
    // play 5 round of the game
    for (i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        // prompt user to choose rock, paper, or scissors
        playerSelection = prompt(`Choose ROCK, PAPER, or SCISSORS:\nGame ${i + 1} of 5`);
        if (playerSelection === null) {break;} 
        playerSelection = playerSelection.toLowerCase();
        while (!choices.includes(playerSelection)) {
            playerSelection = prompt('Choice must be ROCK, PAPER, or SCISSORS')
            if (playerSelection === null) {continue;}
            playerSelection = playerSelection.toLowerCase();
        }
        console.log(playRound());
    }
    const winner = (playerScore > computerScore)? "Player is victorious!":
                   (playerScore < computerScore)? "Computer is victorious!":
                   "It's a draw!";
    console.log(`Game Over!\nPlayer: ${playerScore}\tComputer: ${computerScore}\n${winner}`);
}

// compare results and log answer
function playRound() {
    if (playerSelection === computerSelection) {
        return didWin();
    }
    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'scissors')? didWin(true) : didWin(false);
        case 'paper':
            return (computerSelection === 'rock')? didWin(true) : didWin(false);
        case 'scissors':
            return (computerSelection === 'paper')? didWin(true) : didWin(false);
        default:
            return 'Something went very, very wrong :(';
    }
}

function didWin(win){
    switch (win){
        case true:
            playerScore++
            return `You Win! ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())} Beats ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())}\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
        case false:
            computerScore++
            return `You Lose! ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())} Beats ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())}\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
        default:
            return `Draw!\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
    }
}

game();