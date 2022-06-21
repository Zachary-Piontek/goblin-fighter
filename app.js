import {
    createGoblin,
} from './state.js';

let fighterHp = 10;
let massacredGoblins = 0;
let goblinName;
let deadGoblins = [];


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
const goblinCreator = document.querySelector('#goblin-creator');

function displayGame() {
    massacredNumber.textContent = massacredGoblins;
    goblinList.textContent = '';
    if (fighterHp === 0) {
        alert('Too many goblins to overcome.');
        // Hp.textContent = 'Valiant attempt. Try again.';
    }
    else {
        Hp.textContent = `${fighterHp}`;
    }
    

    for (let start of startingGoblins) {
        const goblin = createGoblin(start);
        
        goblin.addEventListener('click', () => {
            let attack = Math.trunc(Math.random() * 100);
            if (attack > 50) {
                start.goblinHp--;
                alert(`You wounded ${start.goblinName}. Keep attacking.`);
                
            }
            else if (attack < 40) {
                fighterHp--;
                alert(`${start.goblinName} wounded you.`);
            }
            else {
                alert(`You blocked ${start.goblinName}. Good defense.`);
            }
            if (start.goblinHp === 0) {
                deadGoblins.push(goblin);
                massacredGoblins++;
            }
            displayGame();
        });
        goblinList.append(goblin);
    }
    
}

goblinCreator.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = new FormData(goblinCreator);
    goblinName = input.get('goblin-name');
    goblinCreator.reset();

    const goblin = {
        goblinName,
        goblinHp: Math.ceil(Math.random() * 5)       
    };
    alert(`${goblinName} has entered the battlefield.`);
    startingGoblins.push(goblin);
    displayGame();
});

displayGame();