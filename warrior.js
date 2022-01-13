'use strict';

class Warrior {

  constructor() {
    this.xp = 100;
  }

  level() {
    return 1;
  }

  rank() {
    return "Pushover";
  }

  experience() {
    return this.xp;
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    } else if (enemyLevel = this.level()) {
      this.xp += 10;
    }
  }

  training() {
    
  }

}

module.exports = Warrior;
