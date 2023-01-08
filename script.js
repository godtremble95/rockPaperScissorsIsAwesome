const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');

let playerScore = 0;
let computerScore = 0;

// get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const compSelect = choices[Math.floor(Math.random() * 3)]
  return compSelect;
}

// initialize selections and display answer/score
function playRound() {
  const playerSelection = this.id;
  const computerSelection = getComputerChoice();
  results.textContent = getResult(playerSelection, computerSelection);
}

// decide winner and award points
function getResult(playerSelection, computerSelection){
  let win;
  if (playerSelection === computerSelection) {
    return `Draw!\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
  }
  switch (playerSelection) {
    case 'rock':
      win = (computerSelection === 'scissors')? true : false;
      break;
    case 'paper':
      win = (computerSelection === 'rock')? true : false;
      break;
    case 'scissors':
      win = (computerSelection === 'paper')? true : false;
      break;
    default:
      console.log('Something went very, very wrong :(');
  }
  switch (win){
    case true:
      playerScore++
      return `You Win! ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())} Beats ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())}\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
    case false:
      computerScore++
      return `You Lose! ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())} Beats ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())}\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
    default:
      console.log('Something went very, very wrong :(');
  }
}

//Create Listener for player's selection
buttons.forEach(button => button.addEventListener('click', playRound));

/* function game() {
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
} */