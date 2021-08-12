let min = 1;
let max = 10;
let win = 2;
let guessNum = 3;


const game = document.querySelector('.game');
const minNum =document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guesIn = document.querySelector('#guess');
const message = document.querySelector('.result');


minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click' , theGuess)

function theGuess(){
    let guess = parseInt(guesIn.value)
    alert(guess)
}