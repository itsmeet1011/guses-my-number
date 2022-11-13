'use strict';

const secreatNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secreatNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input is enter
  if (!guess) {
    document.querySelector('.message').textContent = '😒 NO number!';
    // when guess is correct
  } else if (guess === secreatNumber) {
    document.querySelector('.message').textContent = '👌currect number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    // when guess is too high
  } else if (guess !== secreatNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secreatNumber ? '🥴 Too Heigh!' : '🥴 Too Low!';
      //   if (guess > secreatNumber) {
      //     document.querySelector('.message').textContent = '🥴 Too Heigh!';
      //   } else {
      //     document.querySelector('.message').textContent = '🥴 Too Low!';
      //   }

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 Game Over';
    }
    //   when gues is too low
  }
  //    else if (guess < secreatNumber) {
  //     if (score > 0) {

  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 Game Over';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  const secreatNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
