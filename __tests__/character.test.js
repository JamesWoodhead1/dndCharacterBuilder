const Character = require('../src/character.js');

describe(`constructor`, () => {
  it(`returns an object`, () => {
    expect(new Character(`Razum-Dar`)).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const character = new Character('Razum-Dar');
    expect(character.name).toEqual('Razum-Dar');
  });
});