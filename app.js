/* Imports */

/* State */
let gameState = 'guess';
let guess = '';
let fight1 = document.getElementById('fight1');
let fight2 = document.getElementById('fight2');
let fight3 = document.getElementById('fight3');
let fightPick = document.getElementById('fighter-select');
let sbtxt = document.getElementById('subtext');
/* Actions */
function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}
function loadPage() {}

/* Components */

/*probability array*/
const fighters = ['link', 'cucco', 'bokoblin'];
/* Component */
// get DOM
// display
// event listeners

fight1.addEventListener('click', () => {
    fightPick.classList.add('hide');
    sbtxt.classList.add('hide');
});
fight2.addEventListener('click', () => {
    fightPick.classList.add('hide');
    sbtxt.classList.add('hide');
});
fight3.addEventListener('click', () => {
    fightPick.classList.add('hide');
    sbtxt.classList.add('hide');
});

/* Run page load code */
loadPage();
