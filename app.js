import {
    createGoblin,
} from './state.js';

let fighterHp = 10;
let massacredGoblins = 0;


let startingGoblins = [
    {
        goblinName: 'Tigz',
        goblinHp: 4,
    },
    {
        goblinName: 'Gronx',
        goblinHp: 2,
    },
];



const Hp = document.querySelector('#fighter-hp');
const goblinList = document.querySelector('#goblin-list');
const massacredNumber = document.querySelector('#massacred-number');

function displayGame() {
    massacredNumber.textContent = massacredGoblins;
    if (fighterHp === 0) {
        alert();
    }
    else {
        Hp.textContent = `${fighterHp}`;
    }
    console.log(fighterHp);

    for (let start of startingGoblins) {
        const goblin = createGoblin(start);
        goblin.addEventListener('click', () => {
            displayGame();
        });
        goblinList.append(goblin);
    }
    console.log(massacredGoblins);
}

displayGame();