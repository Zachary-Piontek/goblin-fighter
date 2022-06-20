export function createGoblin(startStats) {
    const goblinBox = document.createElement('div');
    const goblinName = document.createElement('span');
    const goblinHp = document.createElement('span');

    goblinName.textContent = startStats.goblinName;
    console.log(goblinHp, goblinName);
    goblinHp.textContent = `${startStats.goblinHp}`;
    goblinBox.append(goblinName, goblinHp);
    return goblinBox;
}