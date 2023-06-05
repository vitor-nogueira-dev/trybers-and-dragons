import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private adversary: Fighter) {
    super(player);
  }
  
  private isBattleFinished(): boolean {
    return this.player.lifePoints <= -1 || this.adversary.lifePoints <= -1;
  }

  fight(): number {
    while (!this.isBattleFinished()) {
      this.player.attack(this.adversary);
      this.adversary.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;
