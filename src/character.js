function Character(name, role) {
  this.name = name;
  this.role = role;
  this.level = 1;
  this.levelUp = function() {
    this.level += 1;
  }
}

module.exports = Character;