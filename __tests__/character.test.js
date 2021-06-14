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
  it('has an initial level of 1', () => {
    const character = new Character('Razum-Dar', 'Rogue');
    expect(character.level).toEqual(1);
  });
});

describe('levelUp', () => {
  it('increments the character level by 1', () => {
    const character = new Character('Razum-Dar', 'Rogue');
    character.levelUp();
    expect(character.level).toEqual(2);
  })
})