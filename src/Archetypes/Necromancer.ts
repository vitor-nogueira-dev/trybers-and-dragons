import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _damage: EnergyType;
  private static _instancesRanger = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer._instancesRanger += 1;
  }
  
  get energyType(): EnergyType {
    return this._damage;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instancesRanger;
  }
}

export default Necromancer;