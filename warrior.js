'use strict';

class Warrior {

  level() {
    return 1;
  }

  rank() {
    return "Pushover";
  }

  experience() {
    return 100;
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    }
  }

}

module.exports = Warrior;
