const screen = document.querySelector('.screen');
const randomNumberButton = document.querySelector('.random-number-button');
let randomNumber;





randomNumberButton.addEventListener ('click', randomNumberGenerator);

function randomNumberGenerator () {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 1) {
        screen.style.backgroundImage="url(images/dice1.svg)"
    }
    if (randomNumber === 2) {
        screen.style.backgroundImage="url(images/dice2.svg)"
    }
    if (randomNumber === 3) {
        screen.style.backgroundImage="url(images/dice3.svg)"
    }
    if (randomNumber === 4) {
        screen.style.backgroundImage="url(images/dice4.svg)"
    }
    if (randomNumber === 5) {
        screen.style.backgroundImage="url(images/dice5.svg)"
    }
    if (randomNumber === 6) {
        screen.style.backgroundImage="url(images/dice6.svg)"
    }
}