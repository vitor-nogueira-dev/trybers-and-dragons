import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(player: Fighter, private monsters: (SimpleFighter | Fighter)[]) {
    super(player);
  }

  private isBattleFinished(): boolean {
    return this.player.lifePoints <= -1 || this.monsters
      .every((monster) => monster.lifePoints <= -1);
  }

  fight(): number {
    while (!this.isBattleFinished()) {
      this.monsters
        .filter((monster) => monster.lifePoints > -1)
        .forEach((monster) => {
          this.player.attack(monster);
          if (monster.lifePoints > -1) {
            monster.attack(this.player);
          }
        });
    }

    return super.fight();
  }
}

export default PVE;
