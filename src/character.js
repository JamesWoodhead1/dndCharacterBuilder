const MAXIMUM_EXP = 10;
const MINIMUM_HP = 1;

function Character(name, role, race) {
  this.name = name;
  this.role = role;
  this.race = race;
  this.level = 1;
  this.exp = 0;
  this.HP = 10;
};

Character.prototype = {
  get isRested() {
    return this.HP > MINIMUM_HP
  }
};

Character.prototype.levelUp = function() {
  this.exp = 0, this.level += 1;
}

Character.prototype.fight = function() {
  if (!this.isRested) {
    throw new Error(this.name + " is too weak to fight!")
  }
  this.exp += 1, this.HP -= 1;
}

module.exports = Character;