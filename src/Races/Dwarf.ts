import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instancesDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesDwarf += 1;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instancesDwarf;
  }
}

export default Dwarf;