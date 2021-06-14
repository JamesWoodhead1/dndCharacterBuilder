function Character(name, role, race) {
  this.name = name;
  this.role = role;
  this.race = race;
  this.level = 1;
  this.levelUp = function() {
    this.level += 1;
  }
}

module.exports = Character;