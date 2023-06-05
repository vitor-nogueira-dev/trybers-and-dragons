import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _instancesRanger = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._instancesRanger += 1;
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instancesRanger;
  }
}

export default Ranger;