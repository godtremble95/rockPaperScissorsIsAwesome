const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const gameOver = document.createElement('p');
const resetBtn = document.createElement('button');

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
  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

// decide winner and award points
function getResult(playerSelection, computerSelection){
  let win;
  if (playerSelection === computerSelection) {
    return `Draw! Player: ${playerScore}\tComputer: ${computerScore}`;
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
      playerScore++;
      return `You Win! ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())} Beats ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())}\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
    case false:
      computerScore++
      return `You Lose! ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())} Beats ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())}\nPlayer: ${playerScore}\tComputer: ${computerScore}`;
    default:
      console.log('Something went very, very wrong :(');
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  results.textContent = '';
  body.removeChild(gameOver);
  body.removeChild(resetBtn);
  buttons.forEach(button => body.appendChild(button));
}

function endGame() {
  buttons.forEach(button => body.removeChild(button));
  gameOver.textContent = 'Game Over!';
  resetBtn.textContent = 'Try Again?';
  resetBtn.addEventListener('click',reset);
  body.appendChild(gameOver);
  body.appendChild(resetBtn);
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