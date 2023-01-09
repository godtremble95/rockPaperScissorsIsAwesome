const gameBody = document.querySelector('.game');
const options = document.querySelector('#options');
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const playerDisplay = document.querySelector('.playerScore');
const compDisplay = document.querySelector('.computerScore');
const gameOver = document.createElement('p');
const resetBtn = document.createElement('button');
const gameOverImg = document.createElement('img');

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
  playerDisplay.textContent = `You: ${playerScore}`;
  compDisplay.textContent = `Computer: ${computerScore}`;
  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

// decide winner and award points
function getResult(playerSelection, computerSelection){
  let win;
  if (playerSelection === computerSelection) {
    return 'Draw!';
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
      return `You Win! ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())} Beats ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())}`;
    case false:
      computerScore++
      return `You Lose! ${computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())} Beats ${playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())}`;
    default:
      console.log('Something went very, very wrong :(');
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerDisplay.textContent = 'You: 0';
  compDisplay. textContent = 'Computer: 0'
  results.textContent = '';
  options.removeChild(gameOver);
  options.removeChild(resetBtn);
  gameBody.removeChild(gameOverImg);
  buttons.forEach(button => options.appendChild(button));
}

function endGame() {
  buttons.forEach(button => options.removeChild(button));
  gameOver.textContent =
    playerScore > computerScore ? 'You\'ve won the battle, but the war is far from over!'
    : 'The quickest way of ending a war is to lose it.';
  gameOver.id = 'gameOver';
  gameOverImg.src = (playerScore > computerScore)? './img/victory.png' : './img/defeat.png';
  gameOverImg.alt = (playerScore > computerScore)? 'victory trophy' : 'defeat';
  resetBtn.innerHTML = '<img src="./img/reset.png" alt="reset" draggable="false">';
  resetBtn.addEventListener('click',reset);
  options.appendChild(gameOver);
  options.appendChild(resetBtn);
  gameBody.appendChild(gameOverImg);
}

//Create Listener for player's selection
buttons.forEach(button => button.addEventListener('click', playRound));
