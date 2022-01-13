'use strict';

class Warrior {

  constructor() {
    this.xp = 100;
    this.achievementArr = [];
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

  achievements() {
    return this.achievementArr;
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    } else if (enemyLevel = this.level()) {
      this.xp += 10;
    }
  }

  training(detailArray) {
    const description = detailArray[0];
    const experienceAwarded = detailArray[1];
    const minLevel = detailArray[2];

    if (minLevel > this.level()) {
      return "Not strong enough";
    }

    this.xp += experienceAwarded;
    this.achievementArr.push(description);
    return description;
  }

}

module.exports = Warrior;
