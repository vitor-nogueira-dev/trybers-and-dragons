import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  receiveDamage(attackPoints: number): number {
    const attack = this._lifePoints - attackPoints;
    if (attack <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = attack;
    }
    return this._lifePoints;
  }
}

export default Monster;
