const options = document.querySelector('#options');
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
  options.removeChild(gameOver);
  options.removeChild(resetBtn);
  buttons.forEach(button => options.appendChild(button));
}

function endGame() {
  buttons.forEach(button => options.removeChild(button));
  gameOver.textContent = 'Game Over!';
  gameOver.id = 'gameOver';
  resetBtn.innerHTML = '<img src="./img/reset.png" alt="reset" draggable="false">';
  resetBtn.addEventListener('click',reset);
  options.appendChild(gameOver);
  options.appendChild(resetBtn);
}

//Create Listener for player's selection
buttons.forEach(button => button.addEventListener('click', playRound));
