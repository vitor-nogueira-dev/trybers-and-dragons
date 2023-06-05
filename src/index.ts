import Battle from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import PVE from './Battle/PVE';
import PVP from './Battle/PVP';

const player1 = new Character('Character1');
const player2 = new Character('Character2');
const player3 = new Character('Character3');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1: Monster = new Monster();
const monster2: Dragon = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
