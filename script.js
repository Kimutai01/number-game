let min = 1;
let max = 10;
let winNum = getRandomNum(min, max);
let guessNum = 3;


const game = document.querySelector('.game');
const minNum =document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guesIn = document.querySelector('#guess');
const message = document.querySelector('.result');


minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className=== 'play-again'){
        window.location.reload();
    }
})

guessBtn.addEventListener('click' , theGuess)

function theGuess(){
    let guess = parseInt(guesIn.value)


//validating

if(isNaN(guess) || guess < min || guess > max){
    setMessage(`please enter a number between ${min} and ${max}`, 'red')

}

if(guess== winNum){
   gameOver(true, `${winNum} is correct! YOU WIN`);
}else{
    guessNum -=1

    if(guessNum==0){
       gameOver(false, `Game over, you lost. The correct number was ${winNum}`)

    }else {
        guesIn.style.borderColor = 'red'
        guesIn.value=''
        setMessage(`${guess} is not correct, ${guessNum} guesses left`)

    }
}
}

function gameOver(won, msg){
    let color;
    won===true ? color='green' : color='red'
    guesIn.disabled= true
    guesIn.style.borderColor = color
    message.style.color = color
    setMessage(msg)
    guessBtn.value= 'play Again';
    guessBtn.className += 'play-again'

}

function getRandomNum(min, max){
   return Math.floor(Math.random()*(max-min+1)+min)


}




function setMessage(msg , color){
    message.style.color =color
    message.textContent= msg

}