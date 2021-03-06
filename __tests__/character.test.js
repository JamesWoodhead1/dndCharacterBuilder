const Character = require('../src/character.js');

describe(`constructor`, () => {
  it(`returns an object`, () => {
    expect(new Character(`Razum-Dar`)).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const character = new Character('Razum-Dar');
    expect(character.name).toEqual('Razum-Dar');
  });
  it('sets the class property', () => {
    const character = new Character('Razum-Dar', 'Rogue');
    expect(character.role).toEqual('Rogue');
  });
  it('sets the race property', () => {
    const character = new Character('Razum-Dar', 'Rogue', 'Tabaxi');
    expect(character.race).toEqual('Tabaxi');
  });
  it('has an initial level of 1', () => {
    const character = new Character('Razum-Dar', 'Rogue');
    expect(character.level).toEqual(1);
  });
  it('has initial hit points of 10', () => {
    const character = new Character('Razum-Dar', 'Rogue', 'Tabaxi');
    expect(character.HP).toEqual(10);
  });
});

describe('fight', () => {
  it('increments a characters experience by 1', () => {
    const character = new Character('Razum-Dar', 'Rogue', 'Tabaxi');

    character.exp = 0;
    character.fight();

    expect(character.exp).toEqual(1);
  });
  it('reduces HP by 1', () => {
    const character = new Character('Razum-Dar', 'Rogue', 'Tabaxi');
    character.fight();
    expect(character.HP).toEqual(9);
  });
  it('throws an error if the HP is too low to fight', () => {
    const character = new Character('Razum-Dar', 'Rogue', 'Tabaxi');
    character.HP = 1;
    expect(() => character.fight()).toThrow(character.name + " needs to rest!");
  });
});

describe('levelUp', () => {
  it('increments the character level by 1', () => {
    const character = new Character('Razum-Dar', 'Rogue');
    character.levelUp();
    expect(character.level).toEqual(2);
  });
  it('resets experience to 0', () => {
    const character = new Character('Razum-Dar', 'Rogue', 'Tabaxi')
    character.fight();
    character.levelUp();
    expect(character.exp).toEqual(0);
  });
});