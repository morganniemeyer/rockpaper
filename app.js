/* Imports */

/* State */
let gameState = 'guess';
let pick = '';
let fight1 = document.getElementById('fight1');
let fight2 = document.getElementById('fight2');
let fight3 = document.getElementById('fight3');

let fighterPick = document.getElementById('fighter-select');
let sbtxt = document.getElementById('subtext');

let play1 = document.getElementById('play1');
let play2 = document.getElementById('play2');
let play3 = document.getElementById('play3');

const fighters = ['link', 'cucco', 'bokoblin'];
let compPick = getRandomItem(fighters);

/* Actions */
function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}
function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function loadPage() {}

function fightPick(userPick) {
    gameState = 'results';
    fighterPick.classList.add('hide');
    sbtxt.classList.add('hide');
    gameState = 'results';
    pick = userPick;
    dispFighter();
    compPick;
}

function dispFighter() {
    if (pick === fight1) {
        play1.classList.remove('hide');
    } else {
        if (pick === fight2) {
            play2.classList.remove('hide');
        } else {
            pick === fight3;
            play3.classList.remove('hide');
            play3.classList.add('flip');
        }
    }
}

/* Components */

/*probability array*/
/* Component */
// get DOM
// display
// event listeners

fight1.addEventListener('click', () => {
    fightPick(fight1);
});
fight2.addEventListener('click', () => {
    fightPick(fight2);
});
fight3.addEventListener('click', () => {
    fightPick(fight3);
});

/* Run page load code */
loadPage();
