'use strict';
const INITIAL_SCORE = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; // DBG show secret number
let score = INITIAL_SCORE;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const reset_game = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber; // "?" DBG show secret number

  score = INITIAL_SCORE;
  document.querySelector('.score').textContent = score;

  // restore style & msg
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', reset_game);

const wrong_guess = function (hintMsg) {
  if (score > 1) {
    displayMessage(hintMsg);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🛑 No number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('👌 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    wrong_guess(guess > secretNumber ? '👍 Too high!' : '👎 Too low!');
  }
});
