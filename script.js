'use strict';

const body = document.querySelector('body');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const score = document.querySelector('.score');

let number;
let scoreValue;
let highScoreValue = highScore.innerHTML;

reload();

check.addEventListener('click', () => {
  if (guess.value == number) {
    gameSucceed();
  } else {
    gameFailed();
  }
});

again.addEventListener('click', () => {
  reload();
});

function reload() {
  number = Math.ceil(Math.random() * 20);
  body.style.backgroundColor = '#222';
  check.removeAttribute('disabled');
  guess.disabled = false;
  scoreValue = 20;
  score.innerHTML = scoreValue;
  message.innerHTML = 'Start guessing...';
  guess.value = 1;
}

function gameSucceed() {
  body.style.backgroundColor = 'green';
  message.innerHTML = 'Correct guess! congrats 😁😁';
  if (scoreValue > highScoreValue) {
    highScoreValue = scoreValue;
    highScore.innerHTML = highScoreValue;
    check.setAttribute('disabled', '');
    guess.disabled = true;
  }
}

function gameFailed() {
  scoreValue--;
  message.innerHTML = 'Wrong guess 😡😡';
  score.innerHTML = scoreValue;
  if (scoreValue < 1) {
    body.style.backgroundColor = 'red';
    check.setAttribute('disabled', '');
    message.innerHTML = 'Game Over 🥹🥹';
    guess.disabled = true;
  }
}
