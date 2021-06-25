function Character(name, role, race) {
  this.name = name;
  this.role = role;
  this.race = race;
  this.level = 1;
  this.exp = 0;
}

Character.prototype.levelUp = function() {
  this.exp = 0, this.level += 1;
}

Character.prototype.fight = function() {
  this.exp += 1
}

module.exports = Character;