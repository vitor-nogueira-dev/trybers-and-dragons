import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _damage: EnergyType;
  private static _instancesRanger = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Mage._instancesRanger += 1;
  }
  
  get energyType(): EnergyType {
    return this._damage;
  }

  public static createdArchetypeInstances(): number {
    return Mage._instancesRanger;
  }
}

export default Mage;