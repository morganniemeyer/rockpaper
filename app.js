/* Imports */

/* State */
let pick = '';
let winCount = 0;
let loseCount = 0;
let tieCount = 0;

let fight1 = document.getElementById('fight1');
let fight2 = document.getElementById('fight2');
let fight3 = document.getElementById('fight3');

let fighterPick = document.getElementById('fighter-select');
let sbtxt = document.getElementById('subtext');

let play1 = document.getElementById('play1');
let play2 = document.getElementById('play2');
let play3 = document.getElementById('play3');

let compPlay1 = document.getElementById('compplay1');
let compPlay2 = document.getElementById('compplay2');
let compPlay3 = document.getElementById('compplay3');

let fighters = ['link', 'cucco', 'bokoblin'];
let compPick = getRandomItem(fighters);
let playAgain = document.getElementById('playagain');

let winDisp = document.getElementById('total-wins');
let loseDisp = document.getElementById('total-losses');
let tieDisp = document.getElementById('total-ties');

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
    fighterPick.classList.add('hide');
    pick = userPick;
    dispFighter();
    compFighter();
    playAgain.classList.remove('hide');
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
        }
    }
}
function compFighter() {
    compPick = getRandomItem(fighters);
    if (compPick === 'link') {
        compPlay1.classList.remove('hide');
    } else {
        if (compPick === 'cucco') {
            compPlay2.classList.remove('hide');
        } else {
            compPick === 'bokoblin';
            compPlay3.classList.remove('hide');
        }
    }
}
function playMore() {
    play1.classList.add('hide');
    play2.classList.add('hide');
    play3.classList.add('hide');
    compPlay1.classList.add('hide');
    compPlay2.classList.add('hide');
    compPlay3.classList.add('hide');
    playAgain.classList.add('hide');
    fighterPick.classList.remove('hide');
    sbtxt.textContent = 'Choose your Fighter!';
    compPick = '';
}

/* Components */

/*probability array*/
/* Component */
// get DOM
// display
// event listeners

fight1.addEventListener('click', () => {
    fightPick(fight1);
    if (compPick === 'link') {
        sbtxt.textContent = 'Stop messing with the Timeline! (Draw)';
        tieCount++;
        tieDisp.textContent = tieCount;
    } else {
        if (compPick === 'cucco') {
            sbtxt.textContent = 'Cucco! Run Away! (Lose)';
            loseCount++;
            loseDisp.textContent = loseCount;
        } else {
            compPick === 'bokoblin';
            sbtxt.textContent = 'Easy Pickins (Win)';
            winCount++;
            winDisp.textContent = winCount;
        }
    }
});

fight2.addEventListener('click', () => {
    fightPick(fight2);
    if (compPick === 'link') {
        sbtxt.textContent = 'Get Him! (Win)';
        winCount++;
        winDisp.textContent = winCount;
    } else {
        if (compPick === 'cucco') {
            sbtxt.textContent = 'Best Friends Forever (Draw)';
            tieCount++;
            tieDisp.textContent = tieCount;
        } else {
            compPick === 'bokoblin';
            sbtxt.textContent = 'Run Away!!! (Lose)';
            loseCount++;
            loseDisp.textContent = loseCount;
        }
    }
});

fight3.addEventListener('click', () => {
    fightPick(fight3);
    if (compPick === 'link') {
        sbtxt.textContent = 'Interloper! Run! (Lose)';
        loseCount++;
        loseDisp.textContent = loseCount;
    } else {
        if (compPick === 'cucco') {
            sbtxt.textContent = 'Ooo Dinner (Win)';
            winCount++;
            winDisp.textContent = winCount;
        } else {
            compPick === 'bokoblin';
            sbtxt.textContent = 'The enemy of my enemy is a friend. (Draw)';
            tieCount++;
            tieDisp.textContent = tieCount;
        }
    }
});

playAgain.addEventListener('click', () => {
    playMore();
});

/* Run page load code */
loadPage();
