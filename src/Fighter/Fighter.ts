import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  attack(enemy: Fighter): void;
  receiveDamage(attackPoints: number): number;
  levelUp(): void;
}

// export interface Attack {
// }

// export interface ReceiveDamage {
// }

export default Fighter;