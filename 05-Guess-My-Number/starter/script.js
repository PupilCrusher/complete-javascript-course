'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.score').textContent = '10';
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 17;
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);



let score = 20;
let highscore = 0;

// to play again 
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = NaN;
    document.querySelector('.message').textContent = 'Start guessing...'

    

})



document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);

   //When there is no input
   if(!guess) {

    document.querySelector('.message').textContent = 'No Number 🛑';

    //When player wins
   } else if (guess === secretNumber) {
    console.log(document.querySelector('.message').textContent = 'Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '12rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
    }

    
    
    
    
    //When guess is too high
   } else if(guess > secretNumber) {
    if(score > 1) {
        document.querySelector('.message').textContent = '🎢 Too High';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You Lose Game is Over 👻';
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = secretNumber;
    }
    //When guess is too low
   }else  if(guess < secretNumber) {
    if(score > 1) {
        document.querySelector('.message').textContent = '⤵️ Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You Lost the Game Zort 👻'
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = secretNumber;
    }

   }

});





//document.querySelector('.guess').value = 20;






