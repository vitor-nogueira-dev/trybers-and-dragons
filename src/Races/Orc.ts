import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instancesOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instancesOrc += 1;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._instancesOrc;
  }
}

export default Orc;
