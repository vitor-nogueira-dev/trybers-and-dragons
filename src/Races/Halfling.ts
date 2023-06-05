import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instancesHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instancesHalfling += 1;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._instancesHalfling;
  }
}

export default Halfling;