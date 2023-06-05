import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _damage: EnergyType;
  private static _instancesRanger = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior._instancesRanger += 1;
  }
  
  get energyType(): EnergyType {
    return this._damage;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instancesRanger;
  }
}

export default Warrior;